import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Product, ProductFilter } from '../models';
import {
  composeNameFilterParams,
  composePriceFilterParams,
  composeTypeFilterParams,
} from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _url = environment.apiUrl;

  constructor(private readonly _http: HttpClient) {}

  filterProducts(
    pageNumber = 0,
    pageSize = 10,
    filters?: ProductFilter
  ): Observable<HttpResponse<Product[]>> {
    const rangeFilterParams = filters?.priceRanges
      ? composePriceFilterParams(filters.priceRanges)
      : '';

    const nameFilterParams = filters?.name
      ? composeNameFilterParams(filters.name)
      : '';

    const typeFilterParams = filters?.type
      ? composeTypeFilterParams(filters.type)
      : '';

    return this._http.get<Product[]>(
      `${this._url}/products?` +
        nameFilterParams +
        typeFilterParams +
        rangeFilterParams +
        `_page=${pageNumber}&_limit=${pageSize}`,
      { observe: 'response' }
    );
  }
}
