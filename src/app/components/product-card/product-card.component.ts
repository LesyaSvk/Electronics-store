import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog) {}

  openProductDetails() {
    this.dialog.open(ProductModalComponent, {
      data: this.product,
      width: '500px',
    });
  }
}
