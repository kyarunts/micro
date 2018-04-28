import { Injectable } from '@angular/core';

import { MicroHttpService } from '../micro-http.service';
import { ProductsObject } from './products.data';

import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http';
import { ENVIRONMENT } from '../globals';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class ProductsComponentService {
    private productsUrl: string = '/api/products';
    private categoriesUrl: string = '/api/categories';
    constructor(private http: MicroHttpService) {}
    
    public getProducts(): Observable<any> {
        return this.http.get(this.categoriesUrl);
        // SHOULD BE THIS.PRODUCTSURL
    }

    public getCategories(): Observable<any> {
        return this.http.get(this.categoriesUrl);
    }

    public forkJoin(): Observable<any> {
        return Observable.forkJoin([
            this.getProducts(),
            this.getCategories(),
        ]);
    }
}
