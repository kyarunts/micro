import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";
import { ENVIRONMENT } from "../globals";
import { HomeDataInterface, HomeDataMock } from "./home.constants";
import 'rxjs/add/observable/of';

@Injectable()
export class HomeService {
    private homeUrl: string = '/api/homeItems'

    constructor(private microHttp: MicroHttpService) {}

    public getHomeData(): Observable<HomeDataInterface> {
        return this.microHttp.get(this.homeUrl);
    }
}
