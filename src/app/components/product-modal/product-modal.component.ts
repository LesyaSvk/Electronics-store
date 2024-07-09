import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { addToCart } from '../../store/actions/cart.actions';
import { Product } from '../../models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private dialogRef: MatDialogRef<ProductModalComponent>,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  addToCart() {
    this.store.dispatch(addToCart({ product: this.product }));
    this.snackBar.open('Product was successfully added to the Cart', '', {
      duration: 2000,
    });
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
