import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/shared-service';
import { ModalService } from '../../generics/modal/modal.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    @Input() public selectedProduct: any;
    @Output() public back: EventEmitter<boolean> = new EventEmitter();

    public images: Object[];
    public currentIndex: number = 0;

    constructor(
        public sharedService: SharedService,
        private modalService: ModalService,
    ) { }

    ngOnInit() {
        this.generateImages();
        console.log(this.selectedProduct);
    }

    public generateImages() {
        this.images = this.selectedProduct['imageUrls'].map((obj) => {
            return {image: obj.url}
        });
        this.images.push({image: this.selectedProduct['mainImage']['url']});
    }

    public openModal(index: number): void {
        this.currentIndex = index;
        this.modalService.open('productDetailsModal');
    }

    public ngOnDestroy() {
        this.modalService.close('productDetailsModal');
        this.modalService.remove('productDetailsModal');
    }
}
