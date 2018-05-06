import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
@Injectable() 
export class CalculatorService {
    constructor(private httpService: MicroHttpService) {}

    public getProducts(): Observable<any> {
        return this.httpService.get('/api/productitems');
    }

    public getProductTypes(): Observable<any> {
        return this.httpService.get('/api/productitemtypes')
    }

    public forkJoin(): Observable<any> {
        return Observable.forkJoin([
            this.getProducts(),
            this.getProductTypes(),
        ]);
    }
}