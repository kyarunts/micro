import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomeDataInterface } from './home.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService],
})
export class HomeComponent implements OnInit {

    public homeData: HomeDataInterface;

    constructor(
        private homeHttp: HomeService
    ) { }

    ngOnInit() {
        document.body.scrollIntoView(true);
        this.homeHttp.getHomeData()
            .subscribe(data => {
                this.homeData = data;
            });
    }

}
