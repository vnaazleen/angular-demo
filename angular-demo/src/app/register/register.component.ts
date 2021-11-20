import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // variables declaration
    employee: any

  constructor() {
    this.employee = {
      empId: 0,
      empName: "",
      gender: "",
      salary: 0,
      doj: "",
      loginId: "",
      password: ""
    }
   }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.employee);
  }

}
