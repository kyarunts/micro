import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsComponentService } from 'app/products/products.component.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    public title: string = "Products";
    public products: Object[];
    public categories: Object[];
    public productId: number;
    private subscription: any;
    private dataSubscription: any;

    constructor(
        private productsService: ProductsComponentService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getData();
        this.subscription = this.route.params.subscribe(params => {
            this.productId = +params['id'];
            if (+params['id'] >= 0) {
                this.title = `Products: ${params['id']}`;
            } else {
                this.title = "PRODUCTS"
            }
        });
    }

    private getData(): void {
        this.dataSubscription = this.productsService.getProducts().subscribe(
            (data: any) => {
                this.products = data['products'];
                this.categories = data['categories'];
            }
        )
    }
    

    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
        this.subscription.unsubscribe();
    }
}
