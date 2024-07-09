import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Product, ProductFilter } from '../models';

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
    let params = new HttpParams()
      .set('_page', pageNumber.toString())
      .set('_limit', pageSize.toString());

    if (filters?.priceRange) {
      params = params
        .set('price_gte', filters.priceRange.min.toString())
        .set('price_lte', filters.priceRange.max.toString());
    }

    if (filters?.type) {
      params = params.set('type_like', filters.type);
    }

    if (filters?.name) {
      params = params.set('name_like', filters.name);
    }

    return this._http.get<Product[]>(`${this._url}/products?`, {
      observe: 'response',
      params,
    });
  }
}
