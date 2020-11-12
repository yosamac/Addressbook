import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class ContactsService {
  
  private _names: Person[] = [
    new Person(1, "Steve","Jobs"),
    new Person(2, "Steve","Wozniak"), 
    new Person(3, "Bill","Gates"), 
    new Person(4, "Sundar","Pichai"), 
    new Person(5, "Elon","Musk"),
    new Person(6, "Bob","Esponja")
  ];

  getContacts(): Person[] {
    return this._names;
  }

  deleteContact(contact: Person) {
      this._names = this._names.filter(n => n.id !== contact.id);
  }
}
