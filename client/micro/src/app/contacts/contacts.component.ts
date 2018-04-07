import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    private re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    public showForm: boolean = true;
    public formObject: Object = {
        name: '',
        email: '',
        message: '',
    }
    public formErrors: Object = {
        name: false,
        email: false,
        message: false,
    }

    constructor() { }

    ngOnInit() {
    }

    public validate() {
        if (!this.formObject['name'].trim()) {
            this.formErrors['name'] = true;
        }
        if (
            !this.formObject['email'].trim() ||
            !this.re.test(this.formObject['email'].toLowerCase())
        ) {
            this.formErrors['email'] = true;
        }
        if (!this.formObject['message'].trim()) {
            this.formErrors['message'] = true;
        }
        if (!this.formErrors['name'] && !this.formErrors['email'] && !this.formErrors['message']) {
            console.log('should be sent');
            this.showForm = false;
            this.formObject['name'] = '';
            this.formObject['email'] = '';
            this.formObject['message'] = '';
            
        }
    }

    public validateOnInput(formControl) {
        if (this.formObject[formControl].replace(' ', '')) {
            this.formErrors[formControl] = false;
        }
    }
}
