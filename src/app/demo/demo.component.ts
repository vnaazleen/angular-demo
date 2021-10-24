import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // variable declaration
  name: string;
  age: Number;
  message: string;

  // array
  hobbies: any; //or any[]

  // object
  friend: any

  constructor() { 

    this.name = "Vaseem Naazleen";
    this.age = 19;
    this.message = "";

    this.friend = {name: "Siri", age: 19}
      
    // array init
    this.hobbies = ["Coding", "Eating", "Sleeping"]
  }

  ngOnInit(): void {
  }

  // methods
  showButtonClicked() {
    alert("Button clicked!!")
  }
}
