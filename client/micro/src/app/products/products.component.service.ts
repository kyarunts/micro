import { Injectable } from '@angular/core';

import { MicroHttpService } from '../micro-http.service';
import { ProductsObject } from './products.data';

import { Observable } from 'rxjs';
import { RequestOptionsArgs } from '@angular/http';
import { ENVIRONMENT } from '../globals';

@Injectable()
export class ProductsComponentService {
    private url: string = '/api/products';

    constructor(private http: MicroHttpService) {}
    
    public getProducts(query: Object = null): Observable<any> {
        switch (ENVIRONMENT) {
            case 'test-mock-data':
                return Observable.of([{name: 'Product', id: '1'}]);
            default:
                return this.http.get(this.url, query)
                    .map((products: ProductsObject[]) => products)
        }
    }
}
