import { createReducer, on } from '@ngrx/store';

import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from '../actions/product.actions';
import { productInitialState } from '../state/product.state';

export const productReducer = createReducer(
  productInitialState,
  on(loadProducts, (state) => ({ ...state })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
);
