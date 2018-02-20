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
    
    private MockForProducts = {
        categories: [
            {id: 0, name:'Sandwich Panels'},
            {id: 1, name:'Profiles'},
            {id: 2, name:'Thermal Isolation'},
            {id: 3, name: 'Assembling Parts'},
            {id: 4, name: 'Metal Constructions'},
            {id: 5, name: 'Aluminium Sheets & Rods'}
        ],
        products: [
            { id: 0, categoryId: 0, name: 'Sandwich Panel Extended' },
            { id: 1, categoryId: 1, name: 'Some Profile' },
            { id: 2, categoryId: 2, name: 'Some Isolation Product' },
            { id: 0, categoryId: 0, name: 'Sandwich Panel Extended' },
            { id: 1, categoryId: 1, name: 'Some Profile' },
            { id: 2, categoryId: 2, name: 'Some Isolation Product' },
            { id: 0, categoryId: 0, name: 'Sandwich Panel Extended' },
            { id: 1, categoryId: 1, name: 'Some Profile' },
            { id: 2, categoryId: 2, name: 'Some Isolation Product' },
            { id: 0, categoryId: 0, name: 'Sandwich Panel Extended' },
            { id: 1, categoryId: 1, name: 'Some Profile' },
            { id: 2, categoryId: 2, name: 'Some Isolation Product' },
            { id: 0, categoryId: 0, name: 'Sandwich Panel Extended' },
            { id: 1, categoryId: 1, name: 'Some Profile' },
            { id: 2, categoryId: 2, name: 'Some Isolation Product' },
        ]
    };

    public getProducts(query: Object = null): Observable<any> {
        switch (ENVIRONMENT) {
            case 'test-mock-data':
                return Observable.of(this.MockForProducts);
            default:
                return this.http.get(this.url, query)
                    .map((products: ProductsObject[]) => products)
        }
    }
}
