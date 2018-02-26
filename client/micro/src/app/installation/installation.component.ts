import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ModalService } from './../generics/modal/modal.service';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

    @ViewChild('carusel') carusel: ElementRef;
    
    public currentImageIndex: number = 0;

    public images: Object[] = [
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg'},
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '0', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '1', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '2', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '3', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
        { id: '4', image: 'http://bonusbuildings.com/imgs/gall_content/61a46ad.jpeg' },
    ]
    private timer: any;
    constructor(private modalService: ModalService) { }
    
    ngOnInit() {
        window.document.body.scrollIntoView(true);
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
}
