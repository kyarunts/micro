import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { ModalService } from './../generics/modal/modal.service';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit, OnDestroy {

    @ViewChild('carusel') carusel: ElementRef;
    
    public currentImageIndex: number = 0;

    public images: Object[] = [];

    private timer: any;
    constructor(private modalService: ModalService) { }
    
    ngOnInit() {
        window.document.body.scrollIntoView(true);
        this.generateImages();
    }

    private generateImages(): void {
        for (let i = 1; i < 30; i++) {
            this.images.push({
                id: i,
                image: `./assets/installation/${i}.jpeg`,
            });
        }
    }

    public scrollTo(direction: 'right' | 'left'): void {
        if (direction === 'right') {
            this.carusel.nativeElement.scrollTo(
                this.carusel.nativeElement.scrollLeft + 180, 0
            );
        } else {
            this.carusel.nativeElement.scrollTo(
                this.carusel.nativeElement.scrollLeft - 180, 0
            );
        }
        
    }
    
    public mousedown(direction: 'right' | 'left'): void {
        this.timer = setInterval(() => {
            this.scrollTo(direction);
        }, 50);
    }

    public mouseup(): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    public open(index: number): void {
        this.currentImageIndex = index;
        this.modalService.open('imageViewer');
    }

    public ngOnDestroy() {
        this.modalService.close('imageViewer');
        this.modalService.remove('imageViewer');
    }
}
