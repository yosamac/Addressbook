import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    _contacts: Contact[];

    constructor(private _contactsService: ContactsService) {
        console.log("Component instanced and service injected");
    }

    ngOnInit() {
        console.log("I am in the Hook OnInit");
        this._contacts = this._contactsService.getContacts();
        console.log(this._contacts);
    }

    deleteContact(contact: Contact): void {
        this._contactsService.deleteContact(contact);
        this._contacts = this._contactsService.getContacts();
    }
}
