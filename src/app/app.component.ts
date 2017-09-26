import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Keepcoders';
  names: string[] = ["Steve Jobs", "Steve Wozniak", "Bill Gates", "Sundar Pichai", "Elon Musk", "Bob Esponja"];
  
  constructor() {
    console.log("I am a constructor")
  }
  
  ngOnInit() {
    console.log("I am in the Hook OnInit")
  }

  deleteContact(name: string) {
    console.log(name);
    this.names = this.names.filter(n => n !== name);
  }
}
