import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models';
import { AppState } from '../../store/state';
import {
  selectCartItems,
  selectCartItemCount,
  selectCartTotalPrice,
} from '../../store/selectors/cart.selectors';
import { removeFromCart } from '../../store/actions/cart.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<Product[]>;
  cartItemCount$!: Observable<number>;
  cartTotalPrice$!: Observable<number>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartItemCount$ = this.store.select(selectCartItemCount);
    this.cartTotalPrice$ = this.store.select(selectCartTotalPrice);
  }

  removeProduct(product: Product): void {
    this.store.dispatch(removeFromCart({ productId: product.id }));
    this.snackBar.open('Product was successfully removed the Cart', '', {
      duration: 2000,
    });
  }
}
