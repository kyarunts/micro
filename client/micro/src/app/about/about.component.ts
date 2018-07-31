import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public isReady: boolean = false;
    public categories: any[];
    public services: Object[] = [
        {
            title: '{{ 'production' | translate }}',  
            copy: '{{ 'copyproduction' | translate}}''
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

    constructor(private httpService: AboutService) { }
    
    ngOnInit() {
        document.body.scrollIntoView(true);
        this.httpService.getCategories().subscribe(data => {
            this.categories = data.slice(0, 3);
            this.isReady = true;
        });
    }

}
