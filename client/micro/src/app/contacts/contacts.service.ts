import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MicroHttpService } from "../micro-http.service";

@Injectable()
export class ContactsService {

    private url: string = '/api/sendEmail';
    constructor(private httpService: MicroHttpService) {}

    public sentEmail(body: Object): Observable<any> {
        return this.httpService.post(this.url, body);
    }
}