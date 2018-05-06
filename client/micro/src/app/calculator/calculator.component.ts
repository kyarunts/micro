import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

    public products: any[];
    public productTypes: any[];
    public isReady: boolean = false;
    public extendedTypes: string[] = [];
    public selectedProducts: string[] = [];
    public productsObject: Object = {};
    public selectedProductsCount: Object = {};
    constructor(private httpService: CalculatorService) { }

    testvalue;

    ngOnInit() {
        document.body.scrollIntoView(true);
        this.httpService.forkJoin().subscribe((data) => {
            this.products = data[0];
            this.productTypes = data[1];
            this.generateProductsObject();
            this.generateProductsCountObject();
            this.isReady = true;
        })
    }

    public productsByType(typeId: string): Array<any> {
        return this.products.filter(product => product.type === typeId);
    }

    public typeSelected(typeId: string): void {
        if (this.extendedTypes.indexOf(typeId) > -1) {
            this.extendedTypes.splice(this.extendedTypes.indexOf(typeId), 1);
        } else {
            this.extendedTypes.push(typeId);
        }
    }

    public generateProductsObject(): void {
        this.products.map(product => {
            this.productsObject[product._id] = {
                option: 1,
                amount: null,
            }
        });
    }

    private generateProductsCountObject(): void {
        this.productTypes.map((type, index) => {
            index === 0 && this.extendedTypes.push(type._id);
            this.selectedProductsCount[type._id] = 0;
            this.selectedProductsCount[type._id + 'animate'] = false;
        })
    }

    public selectProduct(productId: string, typeId: string): void {
        this.selectedProducts.push(productId);
        this.selectedProductsCount[typeId] += 1;
        this.selectedProductsCount[typeId + 'animate'] = true;
        setTimeout(() => {
            this.selectedProductsCount[typeId + 'animate'] = false;
        }, 300);
    }

    public deselectProduct(productId: string, typeId: string): void {
        this.selectedProducts.splice(this.selectedProducts.indexOf(productId), 1);
        this.selectedProductsCount[typeId] -= 1;
        this.selectedProductsCount[typeId + 'animate'] = true;
        setTimeout(() => {
            this.selectedProductsCount[typeId + 'animate'] = false;
        }, 300);
    }

    test() {
        console.log(this.productsObject);
    }
}
