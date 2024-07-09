import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import {
  CartComponent,
  FiltersComponent,
  ProductCardComponent,
  ProductModalComponent,
  ProductsListComponent,
} from './components';
import { ProductEffects } from './store/effects/product.effects';
import { cartReducer } from './store/reducers/cart.reducer';
import { productReducer } from './store/reducers/product.reducer';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CartComponent,
    ProductsListComponent,
    ProductModalComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productReducer,
      cart: cartReducer,
    }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatPaginator,
    FormsModule,
    MatInput,
  ],
  providers: [],
  exports: [
    ProductCardComponent,
    ProductModalComponent,
    CartComponent,
    ProductsListComponent,
    FiltersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
