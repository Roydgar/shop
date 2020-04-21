import { createAction, props } from '@ngrx/store';
import { Product } from '../../../products';

export const getProducts = createAction(
  '[Product List Page (App)] GET_PRODUCTS'
);

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{products: Product[]}>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{error: Error | string}>()
);

export const createProduct = createAction(
  '[Admin Product List Page (App)] CREATE_PRODUCT',
  props<{product: Product}>()
);

export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{product: Product}>()
);

export const updateProduct = createAction(
  '[Admin Product List Page (App)] UPDATE_PRODUCT',
  props<{product: Product}>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{product: Product}>()
);

export const createUpdateProductError = createAction(
  '[Create|Update Product Effect] CREATE_OR_UPDATE_PRODUCT_ERROR',
  props<{error: Error | string}>()
);
