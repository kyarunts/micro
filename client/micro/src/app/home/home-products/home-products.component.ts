import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-products',
    templateUrl: './home-products.component.html',
    styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
    
    private productIds: string[] = ['sandwichPanel', 'thermalIsolation', 'profiles'];
    public currentProduct: string = 'sandwichPanel'
    private currentIndex: number = 0;
    private sliderAnimation: any;

    constructor() { }
    
    ngOnInit() {
        this.startAnimation();
    }

    public startAnimation() {
        this.sliderAnimation = setInterval(() => {
            if (this.currentIndex === this.productIds.length - 1) {
                this.currentIndex = 0;
            }
            else {
                this.currentIndex++;
            }
            this.currentProduct = this.productIds[this.currentIndex];
        }, 1000);
    }
    
    public stopAnimation() {
        clearInterval(this.sliderAnimation);
    }
    
    public changeProduct(index: number) {
        if (index > this.productIds.length - 1) {
            this.currentIndex = 0;
        }
        else if (index < 0) {
            this.currentIndex = this.productIds.length - 1;
        }
        else {
            this.currentIndex = index;
        }
        this.currentProduct = this.productIds[this.currentIndex];
    }
}
