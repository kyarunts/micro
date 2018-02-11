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
    public currentProducts: Object[];
    public productId: string;
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
            this.productId = params['id'];
            this.updateTitle(params['id']);
            this.manageCurrentProducts(params['id'] || 'all');
        });
    }

    private updateTitle(paramsId: string): void {
        if (+paramsId >= 0) {
            let categoryName: string = this.getNameById(this.categories, paramsId)[0]['name'];
            this.title = `Products: ${categoryName}`;
        } else {
            this.title = 'Products';
        }
        
    }

    private getNameById(array: Object[], id: string): Object[] {
        return array.filter((item) => {
            return item['id'] == id;
        })
    }

    private manageCurrentProducts(categoryId: number | string): void {
        if (categoryId === 'all') {
            this.currentProducts = this.products;
        } else {
            this.currentProducts = this.products.filter((product) => {
                return product['categoryId'] == categoryId;
            });
        }
        console.log(this.currentProducts);
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
