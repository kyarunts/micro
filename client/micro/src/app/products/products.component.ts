import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsComponentService } from 'app/products/products.component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products;
    public productId: number;
    private subscription: any;

    constructor(
        private productsService: ProductsComponentService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getData();
        this.subscription = this.route.params.subscribe(params => {
            this.productId = +params['id'];
        });
    }

    private getData(): void {
        this.productsService.getProducts().subscribe(
            (data: any) => this.products = data
        ) 
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
