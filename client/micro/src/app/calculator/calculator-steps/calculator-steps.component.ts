import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calculator-steps',
    templateUrl: './calculator-steps.component.html',
    styleUrls: ['./calculator-steps.component.scss']
})
export class CalculatorStepsComponent implements OnInit {

    @Input() public state: 1 | 2 | 3 = 2;
    constructor() { }

    ngOnInit() {
    }

}
