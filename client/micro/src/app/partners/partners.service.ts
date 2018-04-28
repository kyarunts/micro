import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";

@Injectable() 
export class PartnersService {
    private url: string = '/api/partners';
    
    constructor(private httpService: MicroHttpService) {}

    public getPartners(): Observable<any> {
        return this.httpService.get(this.url);
    }
}