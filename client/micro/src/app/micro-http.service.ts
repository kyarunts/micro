import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operators/map';
import 'rxjs/add/operators/catch';

@Injectable()
export class MicroHttpService {
    
    constructor(private http: Http) {}

    public get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.get(url)
            .map((response: Response) => response.json())
            .catch((error: any) => error);
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.post(url, body, options)
            .map((response: Response) => response.json())
            .catch((error: any) => error);
    }
}
