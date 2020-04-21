import { Injectable } from '@angular/core';
import { Product, ProductModel, ProductService } from '../../../products';
import { Observable, of } from 'rxjs';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';

import * as ProductsActions from './products.actions';

import { Action } from '@ngrx/store';
import { catchError, concatMap, map, pluck, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
              private productService: ProductService) {}

  getProducts: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productService.getProducts().pipe(
          map(products => ProductsActions.getProductsSuccess({ products })),
          catchError(error => of(ProductsActions.getProductsError({ error })))
        )
      )
    )
  );

  createProduct: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productService.createProduct(product).pipe(
          map(createdProduct => ProductsActions.createProductSuccess({ product: createdProduct })),
          catchError(error => of(ProductsActions.createUpdateProductError({ error })))
        )
      )
    )
  );

  updateProduct: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productService.updateProduct(product).pipe(
          map(updatedProduct => ProductsActions.updateProductSuccess({ product: updatedProduct })),
          catchError(error => of(ProductsActions.createUpdateProductError({ error })))
        )
      )
    )
  );
}
