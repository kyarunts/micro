import { Component, Input, HostListener } from '@angular/core';

enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37
}

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {

    @Input() images: Array<any>;
    @Input() currentIndex: number = 0;
    @HostListener('window:keyup', ['$event']) keyup(event: KeyboardEvent) {
        if (event.keyCode === KEY_CODE.RIGHT_ARROW && this.currentIndex !== this.images.length - 1) 
            this.currentIndex += 1;
        if (event.keyCode === KEY_CODE.LEFT_ARROW && this.currentIndex !== 0) this.currentIndex -= 1;
    }
    
    constructor() { }
    
    public changeCurrent(action: string): void {
        switch(action) {
            case 'increment':
                this.currentIndex += 1;
                break;
            case 'decrement':
                this.currentIndex -= 1;
                break;
        } 
    }
}
