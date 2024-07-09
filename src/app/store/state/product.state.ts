import { Product } from '../../models';

export interface ProductState {
  products: Product[];
  error: Error | null;
}

export const productInitialState: ProductState = {
  products: [],
  error: null,
};
