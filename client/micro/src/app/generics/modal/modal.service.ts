import { Injectable } from '@angular/core';
import { ModalComponent } from 'app/generics/modal/modal.component';

@Injectable()
export class ModalService {
    public modals: ModalComponent[] = [];

    public register(modal: ModalComponent): void {
        let modalInList = this.modals.filter(modalInList => modalInList.id === modal.id)[0];
        if (!modalInList) this.modals.push(modal);
    }

    public open(modalId: string): void {
        let modal = this.modals.filter(modal => modal.id === modalId)[0];
        if (modal) {
            modal.isOpen = true;
            document.body.classList.add('modal-open');
        }
    }

    public close(modalId: string): void {
        let modal = this.modals.filter(modal => modal.id === modalId)[0];
        if (modal) {
            modal.isOpen = false;
            modal.closed.emit(true);
        }
        document.body.classList.remove('modal-open');
    }

    public remove(modalId: string) {
        let modal = this.modals.filter(modal => modal.id === modalId)[0];
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal), 1);
        }
    }
}
