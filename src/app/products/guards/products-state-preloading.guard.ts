import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppState } from '../../core/@ngrx/app.state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { checkStore } from './check-store.function';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsStatePreloadingGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
