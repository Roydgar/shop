import { Action, createReducer, on } from '@ngrx/store';
import { initialProductsState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    console.log('Get Products Reducer was called');
    return {
      ...state,
      loading: true
    };
  }),

  on(ProductsActions.getProductsSuccess, (state, { products}) => {
    console.log('Get Products Success Reducer was called' + products);
    const data = [...products];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),

  on(ProductsActions.getProductsError, (state, { error }) => {
    console.log('Get Products Error Reducer was called');
    return {
      ...state,
      loading: false,
      loaded: true,
      error
    };
  }),

  on(ProductsActions.createProduct, (state) => {
    console.log('Create Product Reducer was called');
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductsActions.updateProduct, (state) => {
    console.log('Update Product Reducer was called');
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductsActions.createProductSuccess, (state, { product }) => {
    console.log('Create Product Success Reducer was called' + product);
    const createdProduct = { ...product };
    const data = [...state.data, { ...createdProduct }];

    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),

  on(ProductsActions.updateProductSuccess, (state, { product }) => {
    console.log('Update Product Success Reducer was called' + product);
    const updatedProduct = { ...product };
    const data = [...state.data];
    const index = data.findIndex(t => t.id === product.id);
    data[index] = { ...updatedProduct };

    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),
);


export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}

