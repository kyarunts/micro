import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AboutService {

    constructor(private httpService: MicroHttpService) {}

    public getCategories(): Observable<any> {
        return this.httpService.get('/api/categories');
    }
}