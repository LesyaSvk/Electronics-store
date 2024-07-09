import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from '../actions/product.actions';
import { HttpResponse } from '@angular/common/http';
import { Product } from '../../models';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.filterProducts().pipe(
          map((res: HttpResponse<Product[]>) =>
            loadProductsSuccess({ products: res?.body || [] })
          ),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
