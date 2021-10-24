import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string;
  password: string;

  employee: any;

  constructor() { 
    this.loginId = "";
    this.password = "";

    this.employee = [
      {
        empId: 10,
        empName: "Alice",
        empEmail: "alice@gmail.com",
        password: "password",
        doj: "09/10/2020"
      },
      {
        empId: 20,
        empName: "Bob",
        empEmail: "bob@gmail.com",
        password: "password",
        doj: "03/03/2020"
      }
    ]
  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    console.log(this.loginId + " - " + this.password);

    if(this.loginId === "hr" && this.password === "hr") {
      alert("Welcome hr!")
    } else {
      let isEmployee = false;
      this.employee.forEach((employee: any) => {
        console.log(employee)
        if((this.loginId === employee.empName) && (this.password === employee.password)) {
          alert("Welcome employee!");
          isEmployee = true;
        }
      });

      !isEmployee ? alert("Login failure") : null;
    }
  }

  loginSubmit1(loginForm: any) {
    this.loginId = loginForm.value.loginId;
    this.password = loginForm.value.password;
    console.log(loginForm.value)
    this.loginSubmit();
  }

}
