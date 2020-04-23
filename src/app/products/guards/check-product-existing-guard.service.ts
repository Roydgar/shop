import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/@ngrx/app.state';
import { ProductsFacade } from '../../core/@ngrx/products/products.facade';
import { checkStore } from './check-store.function';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckProductExistingGuard implements CanActivate {

  constructor(private store: Store<AppState>,
              private productsFacade: ProductsFacade,
              private router: Router) {
  }

  canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = +routeSnapshot.paramMap.get('productID');
        return this.checkIfTaskExists(id);
      })
    );
  }

  private checkIfTaskExists(id: number): Observable<boolean> {
    return this.productsFacade.products$.pipe(
      map(products => !!products.find(product => product.id === id)),
      tap(result => {
        if (!result) {
          this.router.navigate(['/home']);
        }
      }),
      take(1)
    );
  }
}
