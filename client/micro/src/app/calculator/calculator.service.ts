import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";

@Injectable() 
export class CalculatorService {
    constructor(private httpService: MicroHttpService) {}

    public getProducts(): Observable<any> {
        return this.httpService.get('/api/products');
    }
}