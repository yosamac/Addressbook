import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  
  private _contacts: Person [];

  constructor(private _contactsService: ContactsService) {
    console.log("Component instanced and service injected");
  }
  
  ngOnInit() {
    console.log("I am in the Hook OnInit");
    this._contacts = this._contactsService.getContacts();
    console.log(this._contacts);
  }

  deleteContact (contact: Person): void {
    this._contactsService.deleteContact(contact);
    this._contacts = this._contactsService.getContacts();
  }
}
