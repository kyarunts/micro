import { Component, OnInit, Input } from '@angular/core';
import { HomeProductsInterface } from '../home.constants';
import { ProjectInterface } from '../../interfaces';

@Component({
    selector: 'app-recent-projects',
    templateUrl: './recent-projects.component.html',
    styleUrls: ['./recent-projects.component.scss']
})
export class RecentProjectsComponent implements OnInit {
    @Input() public projects: ProjectInterface[];
    public currentProjectIndex: number = 0;
    
    constructor() { }

    ngOnInit() {
    }

    public setActive(index: number): void {
        this.currentProjectIndex = index;
    }

}
