import { Product } from '../../models';

export interface CartState {
  products: Product[];
}

export const initialCartState: CartState = {
  products: [],
};
