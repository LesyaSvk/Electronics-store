import { ProductState } from './product.state';
import { CartState } from './cart.state';

export interface AppState {
  products: ProductState;
  cart: CartState;
}
