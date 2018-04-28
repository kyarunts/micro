import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MicroHttpService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) {}

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .catch((error: any) => error);
    }

    public post(url: string, body: any): Observable<any> {
        return this.http.post(url, body, this.httpOptions);
    }
    // public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    //     return this.http.post(url, body, options)
    //         .map((response: Response) => response.json())
    //         .catch((error: any) => error);
    // }
}
