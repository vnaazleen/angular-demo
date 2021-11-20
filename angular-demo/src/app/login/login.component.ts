import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string;
  password: string;

  employee: any;

  constructor(private router: Router, private authGuard: AuthGuard) { 
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
      this.authGuard.setUserLoggedIn();
      this.router.navigate(['hrpage'])
    } else {
      let isEmployee = false;
      this.employee.forEach((employee: any) => {
        if((this.loginId === employee.empName) && (this.password === employee.password)) {
          this.authGuard.setUserLoggedIn();
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
