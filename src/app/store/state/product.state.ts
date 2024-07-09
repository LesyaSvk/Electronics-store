import { Product } from '../../models';

export interface ProductState {
  products: Product[];
  error: any;
}

export const productInitialState: ProductState = {
  products: [],
  error: null,
};
