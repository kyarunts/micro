import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

    public products: any[];
    public isReady: boolean = false;

    constructor(private httpService: CalculatorService) { }

    ngOnInit() {
        document.body.scrollIntoView(true);
        this.httpService.getProducts().subscribe((data) => {
            this.products = data;
            this.isReady = true;
        });
    }

}
