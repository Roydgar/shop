import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';
import * as ProductsActions from './../../core/@ngrx/products/products.actions';
import { AppState } from '../../core/@ngrx/app.state';
import { selectProductsLoaded } from '../../core/@ngrx/products/products.selectors';


export function checkStore(store: Store<AppState>): Observable<boolean> {
  return store.pipe(
    select(selectProductsLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(ProductsActions.getProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}
