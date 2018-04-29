import { Component, ViewChild, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ProductsComponentService } from 'app/products/products.component.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

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

    constructor(
        private productsService: ProductsComponentService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    public get categoryProducts() {
        return this.products.filter(product => {
            return product['category']['_id'] === this.selectedCategoryId;
        })
    }

    ngOnInit() {
        document.body.scrollIntoView(true);
        this.getData();
        this.route.params.subscribe(params => {
            this.selectedCategoryId = params['id'];
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
    }
    
}
