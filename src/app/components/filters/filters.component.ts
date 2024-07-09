import { Component, EventEmitter, Output } from '@angular/core';
import {
  PriceRangeOptions,
  ProductFilter,
  ProductTypeEnum,
} from '../../models';
import { enumToArray, defaultPriceRanges } from '../../utils';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() filtersChanged = new EventEmitter<ProductFilter>();

  selectedType = ProductTypeEnum.ALL;
  productName = '';
  types: string[] = enumToArray(ProductTypeEnum);
  priceRanges: PriceRangeOptions[] = defaultPriceRanges;

  onChange(selectedPriceRange: PriceRangeOptions): void {
    this.priceRanges.forEach((priceRange: PriceRangeOptions): void => {
      if (selectedPriceRange.label !== priceRange.label) {
        priceRange.selected = false;
      }
    });

    this.applyFilters();
  }

  applyFilters(): void {
    const selectedPriceRange = this.priceRanges.find((price) => price.selected);

    this.filtersChanged.emit({
      name: this.productName,
      type:
        this.selectedType === ProductTypeEnum.ALL ? null : this.selectedType,
      priceRange: selectedPriceRange?.range?.length
        ? {
            min: selectedPriceRange?.range[0] as number,
            max: selectedPriceRange?.range[1] as number,
          }
        : null,
    });
  }
}
