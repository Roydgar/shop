import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductModel } from '../../../products';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  selectOriginalProduct,
  selectProductsData,
  selectProductsError,
  selectSelectedProductByUrl
} from './products.selectors';
import * as ProductActions from './products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  products$: Observable<ReadonlyArray<Product>>;
  productsError: Observable<Error | string>;

  constructor(private store: Store<AppState>) {
    this.products$ = store.pipe(select(selectProductsData));
    this.productsError = store.pipe(select(selectProductsError));
  }

  createProduct(product: ProductModel): void {
    this.store.dispatch(ProductActions.createProduct({ product }));
  }

  updateProduct(product: ProductModel): void {
    this.store.dispatch(ProductActions.updateProduct({ product} ));
  }

  selectSelectedProductByUrl(): Observable<ProductModel> {
    return this.store.pipe(select(selectSelectedProductByUrl));
  }

  selectOriginalProduct(): Observable<ProductModel> {
    return this.store.pipe(select(selectOriginalProduct));
  }
}
