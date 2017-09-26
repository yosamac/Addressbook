import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent  {
  @Output()
  buttonDeletePress = new EventEmitter<string>();
  @Input()
  contacts: string[] = [];

  notificationDeleteContact(contact: string): void {
    this.buttonDeletePress.emit(contact)
    console.log(contact);
  }
}
