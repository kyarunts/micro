import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    @Input() productId: number;    
    constructor() { }
    
    ngOnInit() {

    }
    
    ngOnDestroy() {

    }
}
