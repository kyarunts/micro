import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'app/generics/modal/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @ViewChild('wrapper') private wrapper: ElementRef;
    @Input() public id: string;
    public isOpen: boolean = false;
    constructor(
        private modalService: ModalService
    ) { }
    
    ngOnInit() {
        if (this.modalService.modals.indexOf(this) === -1) {
            this.modalService.register(this);
        }
    }

    public wrapperClicked(event: MouseEvent) {
        if (event.srcElement === this.wrapper.nativeElement) {
            this.modalService.close(this.id);
        }
    }

    public close() {
        this.modalService.close(this.id);
    }
}
