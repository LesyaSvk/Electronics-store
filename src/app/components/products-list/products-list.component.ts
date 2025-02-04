import { Component, DestroyRef, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, switchMap } from 'rxjs';
import { ProductFilter, Product } from '../../models';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] | undefined = [];

  pageNumber = 1;
  pageSize = 10;
  totalItems = 0;

  private productsSubject$ = new Subject<any>();

  constructor(
    private store: Store,
    private productsService: ProductService,
    private snackBar: MatSnackBar,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.subscribeToProducts();
    this.productsSubject$.next({ page: this.pageNumber, size: this.pageSize });
  }

  applyFilters(filters: ProductFilter = { name: '', type: null }): void {
    const filtered = this.products;

    this.productsSubject$.next({
      page: this.pageNumber,
      size: this.pageSize,
      filters: filters,
    });

    this.filteredProducts = filtered
      ?.filter((product) => product.type === filters?.type)
      ?.filter((product) => product.name.includes(filters?.name as string));
  }

  subscribeToProducts(): void {
    this.productsSubject$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap(
          (filters: { page: number; size: number; filters: ProductFilter }) =>
            this.productsService.filterProducts(
              filters.page,
              filters.size,
              filters.filters
            )
        )
      )
      .subscribe({
        next: (res: HttpResponse<Product[]>) => {
          this.products = res.body || [];
          this.filteredProducts = res.body || [];
          this.totalItems = (res.headers.get(
            'X-Total-Count'
          ) as unknown) as number; //Json-server bug, nO totalItems in pagination returned, had to get it from response headers
        },
        error: (err) => {
          this.snackBar.open(`Products: ${err.statusText}`);
        },
      });
  }

  pageChange(page: PageEvent): void {
    this.pageNumber = page.pageIndex + 1;
    this.productsSubject$.next({ page: this.pageNumber, size: this.pageSize });
  }
}
