import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import { productsFeatureKey } from './products.reducer';
import { selectRouterState } from '../router/router.selectors';
import { ProductModel } from '../../../products';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductsData = createSelector(
  selectProductsState,
  (state: ProductsState) => state.data
);

export const selectProductsLoaded = createSelector(
  selectProductsState,
  (state: ProductsState) =>  state.loaded
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectOriginalProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.originalProduct
);

export const selectSelectedProductByUrl = createSelector(
  selectProductsData,
  selectRouterState,
  (products, router): ProductModel => {
    const productId = +router.state.params.productID;
    if (productId && products) {
      return products.find(element => element.id === productId);
    } else {
      return new ProductModel(null, '', '', null, null, false);
    }
  }
);
