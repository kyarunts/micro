import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/shared-service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    @Input() public selectedProduct: any;
    @Output() public back: EventEmitter<boolean> = new EventEmitter();
    constructor(
        private sharedService: SharedService
    ) { }

    ngOnInit() {
    }

}
