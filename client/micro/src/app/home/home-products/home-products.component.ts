import { Component, OnInit, Input } from '@angular/core';
import { HomeProductsInterface } from '../home.constants';
import { SharedService } from '../../shared/shared-service';

@Component({
    selector: 'app-home-products',
    templateUrl: './home-products.component.html',
    styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
    
    @Input() public products: HomeProductsInterface[];
    public currentProductIndex: number = 0;
    private sliderAnimation: any;

    constructor(
        private sharedService: SharedService
    ) { }
    
    ngOnInit() {
        this.startAnimation();
    }

    public startAnimation() {
        this.sliderAnimation = setInterval(() => {
            if (this.currentProductIndex === this.products.length - 1) {
                this.currentProductIndex = 0;
            }
            else {
                this.currentProductIndex++;
            }
        }, 5000);
    }
    
    public stopAnimation() {
        clearInterval(this.sliderAnimation);
    }
    
    public changeProduct(index: number) {
        if (index > this.products.length - 1) {
            this.currentProductIndex = 0;
        }
        else if (index < 0) {
            this.currentProductIndex = this.products.length - 1;
        }
        else {
            this.currentProductIndex = index;
        }
    }
    
}
