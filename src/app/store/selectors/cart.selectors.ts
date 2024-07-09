import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Product } from '../../models';
import { AppState } from '../state';
import { CartState } from '../state/cart.state';

export const selectCartState = createFeatureSelector<AppState, CartState>(
  'cart'
);

export const selectCartItems = createSelector(
  selectCartState,
  (cartState: CartState) => cartState.products
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (items: Product[]) => items.length
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items: Product[]) => items.reduce((total, item) => total + item.price, 0)
);

export const selectCartItemById = (productId: string) =>
  createSelector(selectCartItems, (items: Product[]) =>
    items.find((item) => item.id === productId)
  );
