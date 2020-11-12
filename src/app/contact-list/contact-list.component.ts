import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent  {
  
  @Input() contacts: Person[];
  @Output() buttonDeletePressed = new EventEmitter<Person>();

  notificationDeleteContact(contact: Person): void {
    this.buttonDeletePressed.emit(contact)
    console.log(contact);
  }
}
