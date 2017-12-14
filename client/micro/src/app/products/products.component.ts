import { Component, OnInit } from '@angular/core';
import { ProductsComponentService } from 'app/products/products.component.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    public products;

    constructor(private productsService: ProductsComponentService) { }

    ngOnInit() {
        this.getData();
        console.log(this.products);
    }

    private getData(): void {
        this.productsService.getProducts().subscribe(
            (data: any) => this.products = data
        ) 
    }

}
