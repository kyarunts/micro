import { Component, OnInit } from '@angular/core';
import { PartnersService } from './partners.service';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
    public isReady: boolean = false;

    public partners: Object[];

    constructor(private httpService: PartnersService) { }

    ngOnInit() {
        window.document.body.scrollIntoView(true);
        this.httpService.getPartners().subscribe(data => {
            this.partners = data;
            this.isReady = true;
        })
    }

}
