import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { ProjectInterface } from '../interfaces';
import { ModalService } from '../generics/modal/modal.service';
import { SharedService } from '../shared/shared-service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {

    public isReady: boolean = false;
    public projects: ProjectInterface[];
    public images: Object[];
    public isModalReady: boolean = false;

    constructor(
        private portfolioService: PortfolioService,
        private modalService: ModalService,
        private sharedService: SharedService,
    ) { }

    ngOnInit() {
        this.portfolioService.getPortfolio().subscribe((projects: ProjectInterface[]) => {
            this.projects = projects;
            this.isReady = true;
        })
    }

    private getImages(index: number): void {
        this.images = this.projects[index].imageUrls.map((image, index) => {
            return {id: index, image: image['url']}
        });
    }

    public openModal(index: number): void {
        this.getImages(index);
        if (this.images.length) {
            this.isModalReady = true;
            this.modalService.open('projectImageViewer');
        } else {
            this.isModalReady = false;
        }
    }

    public ngOnDestroy() {
        this.modalService.close('projectImageViewer');
        this.modalService.remove('projectImageViewer');
    }
}
