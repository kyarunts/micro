import { Injectable } from "@angular/core";
import { MicroHttpService } from "../micro-http.service";
import { Observable } from "rxjs/Observable";
import { ProjectInterface } from "../interfaces";

@Injectable() 
export class PortfolioService {

    private portfolioUrl: string = '/api/projects';
    constructor(private http: MicroHttpService) {}

    public getPortfolio(): Observable<ProjectInterface[]> {
        return this.http.get(this.portfolioUrl);
    }
}