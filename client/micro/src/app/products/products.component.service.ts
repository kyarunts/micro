import { Injectable } from '@angular/core';

import { MicroHttpService } from '../micro-http.service';
import { ProductsObject } from './products.data';

import { Observable } from 'rxjs';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ProductsComponentService {
    private url: string = '/api/products';

    constructor(private http: MicroHttpService) {}
    
    public getAll(): Observable<any> {
        return this.http.get(this.url)
            .map((products: ProductsObject[]) => products)
    }

    public getByQuery(query: Object): Observable<any> {
        return this.http.get(this.url, query)
            .map((products: ProductsObject[]) => products)
    }
}
