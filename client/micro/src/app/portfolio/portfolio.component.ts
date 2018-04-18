import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { ProjectInterface } from '../interfaces';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {

    public isReady: boolean = false;
    public projects: ProjectInterface[];

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.portfolioService.getPortfolio().subscribe((projects: ProjectInterface[]) => {
            this.projects = projects;
            this.isReady = true;
        })
    }
}
