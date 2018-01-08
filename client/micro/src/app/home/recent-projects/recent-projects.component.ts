import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recent-projects',
    templateUrl: './recent-projects.component.html',
    styleUrls: ['./recent-projects.component.scss']
})
export class RecentProjectsComponent implements OnInit {

    public activeProject: string = 'jermukGroup';
    
    constructor() { }

    ngOnInit() {
    }

    public setActive(id: string) {
        this.activeProject = id;
    }

}
