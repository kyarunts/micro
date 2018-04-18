import { Component, OnInit, Input } from '@angular/core';
import { HomePartnersInterface } from '../home.constants';

@Component({
    selector: 'app-home-clients',
    templateUrl: './home-clients.component.html',
    styleUrls: ['./home-clients.component.scss']
})
export class HomeClientsComponent implements OnInit {

    @Input() public partners: HomePartnersInterface[];
    constructor() { }

    ngOnInit() {
    }

}
