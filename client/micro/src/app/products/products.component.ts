import { Component, ViewChild, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ProductsComponentService } from 'app/products/products.component.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    
    public products: any[];
    public categories: any[];
    public isReady: boolean = false;
    public selectedCategoryId: string;
    public selectedProduct: any;
    public isProductSelected: boolean = false;

    constructor(
        private productsService: ProductsComponentService,
        private route: ActivatedRoute,
        private router: Router,
        public sharedService: SharedService,
    ) { }

    public get categoryProducts() {
        return this.products.filter(product => {
            return product['category']['_id'] === this.selectedCategoryId && product['type'] === 'product';
        })
    }

    public get specs() {
        return this.products.filter(product => {
            return product['category']['_id'] === this.selectedCategoryId && 
                product['type'] !== 'product';
        })
    }

    ngOnInit() {
        document.body.scrollIntoView(true);
        this.getData();
        this.route.params.subscribe(params => {
            this.selectedCategoryId = params['id'];
            this.isProductSelected = false;
        });
    }

    private getData(): void {
        this.productsService.forkJoin()
            .subscribe(data => {
                this.products = data[0];
                this.categories = data[1];
                if (!this.selectedCategoryId) {
                    this.selectedCategoryId = this.categories[0]._id;
                }
                this.isReady = true;
            });
    }

    public selectCategory(id: string) {
        this.selectedCategoryId = id;
        this.isProductSelected = false;
    }

    public selectProduct(id: string) {
        this.selectedProduct = this.products.filter((product) => {
            return product['_id'] === id;
        })[0];
        this.isProductSelected = true;
    }
    
}
