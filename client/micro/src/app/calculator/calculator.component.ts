import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { ModalService } from '../generics/modal/modal.service';
@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
    private re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public hasErrors: boolean = false;
    public products: any[];
    public productTypes: any[];
    public isReady: boolean = false;
    public extendedTypes: string[] = [];
    public selectedProducts: string[] = [];
    public productsObject: Object = {};
    public selectedProductsCount: Object = {};
    public isModalOpen: boolean = false;
    public finalSelectedProducts: Object[] = [];
    public personalDetailsObject: Object = {
        name: '',
        emailAddress: '',
        phoneNumber: '',
        name_error: false,
        emailAddress_error: false,
        phoneNumber_error: false,
    }

    constructor(
        private httpService: CalculatorService,
        private modalService: ModalService
    ) { }

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
                option: 0,
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

    public processSelectedProducts(): void {
        this.finalSelectedProducts = [];
        this.selectedProducts.map(productID => {
            this.finalSelectedProducts.push(
                {
                    product: this.products.filter(product => product._id === productID)[0],
                    values: this.productsObject[productID],
                    optionError: false,
                    amountError: false,
                }
            )
        })
    }

    public goToSubmission(): void {
        this.modalService.open('requestOrderModal');
        this.processSelectedProducts();
        this.isModalOpen = true;
    }

    public validate(): void {
        this.finalSelectedProducts.map(product => {
            if (+product['values']['option'] === 0) {
                product['optionError'] = true;
            }
            if (!product['values']['amount']) {
                product['amountError'] = true;
            }
        });
        if (!this.personalDetailsObject['name'].trim()) {
            this.personalDetailsObject['name_error'] = true;
        }
        if (!this.personalDetailsObject['phoneNumber'].trim()) {
            this.personalDetailsObject['phoneNumber_error'] = true;
        }
        if (
            !this.personalDetailsObject['emailAddress'].trim() ||
            !this.re.test(this.personalDetailsObject['emailAddress'].toLowerCase())
        ) {
            this.personalDetailsObject['emailAddress_error'] = true;
        }
    }

    public clearOptionValidation(value: any, item: Object): void {
        if (value != 0) {
            item['optionError'] = false;
        } else {
            item['optionError'] = true;
        }
        this.hasErrors = false;
    }

    public clearAmountError(value: any, item: Object): void {
        if (value) {
            item['amountError'] = false;
        } else {
            item['amountError'] = true;
        }
        this.hasErrors = false;
    }

    public clearPersonalValidation(value: any, name: string): void {
        if (value) {
            this.personalDetailsObject[name] = false;
        } else {
            this.personalDetailsObject[name] = true;
        }
        this.hasErrors = false;
    }

    public checkErrors(): void {
        this.hasErrors = false;
        for (let key in this.personalDetailsObject) {
            if (
                typeof this.personalDetailsObject[key] === 'boolean' &&
                this.personalDetailsObject[key] === true
            ) {
                this.hasErrors = true;
            }
        }

        this.finalSelectedProducts.map(product => {
            for (let key in product) {
                if (
                    typeof product[key] === 'boolean' &&
                    product[key] === true
                ) {
                    this.hasErrors = true;
                }
            }
        });
    }

    public submit(): void {
        this.validate();
        this.checkErrors();
        console.log(this.hasErrors);
    }

    public ngOnDestroy() {
        this.modalService.close('requestOrderModal');
        this.modalService.remove('requestOrderModal');
    }
}
