import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";
import { ENVIRONMENT } from "../globals";
import { HomeDataInterface, HomeDataMock } from "./home.constants";
import 'rxjs/add/observable/of';

@Injectable()
export class HomeService {
    private homeUrl: string = '/api/home'

    constructor(private microHttp: MicroHttpService) {}

    public getHomeData(): Observable<HomeDataInterface> {
        switch (ENVIRONMENT) {
            case 'test-mock-data':
                return Observable.of(HomeDataMock);
            default:
                return this.microHttp.get(this.homeUrl);
        }
    }
}
