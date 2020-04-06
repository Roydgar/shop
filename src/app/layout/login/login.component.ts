import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  message: string;

  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.setMessage();
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Trying to log in ...';
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {

          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';

          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

}
