import { Component, OnInit } from '@angular/core';
import { selectCartItemCount } from './store/selectors/cart.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Electronics Store';

  cartItemCount$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }
}
