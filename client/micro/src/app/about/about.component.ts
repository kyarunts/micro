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
            title: 'Production',  
            copy: 'copyproduction'
        },
        {
            title: 'Construction',
            copy: 'copyconstruction'
        },
        {
            title: 'DesignandConsulting',
            copy: 'copydesign'
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
