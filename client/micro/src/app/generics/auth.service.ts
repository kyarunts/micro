import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { User } from './user-data.class';

@Injectable()
export class AuthService {
    currentUser: any;
    private hostUrl: string = 'http://localhost:2017';
    constructor(private http: Http) { }

    public login(userDetails: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(
                `${this.hostUrl}/api/login`,
                JSON.stringify(userDetails), options
            )
            .do((response: Response) => {
                if (response.json().success) {
                    this.tokenAssign(response);
                }
                response.json();
            })
    }

    private tokenAssign(response: Response): void {
        this.currentUser = <User>response.json().message;
        let userObj: any  = {};
        userObj.user = response.json().message;
        userObj.token = response.json().token;
        localStorage.setItem('currentUser', JSON.stringify(userObj));
    }
}
