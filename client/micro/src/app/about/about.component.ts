import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public services: Object[] = [
        {
            title: 'Production',  
            copy: `Sandwich-panels are being used in the construction of almost all the fields of buildings.`
        },
        {
            title: 'Construction',
            copy: `Sandwich-panels are being used in the construction of almost all the fields of buildings.`
        },
        {
            title: 'Design and Consulting',
            copy: `Sandwich-panels are being used in the construction of almost all the fields of buildings.`
        },

    ]
    constructor() { }
    
    ngOnInit() {
    }

}
