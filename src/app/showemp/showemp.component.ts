import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {

  // variables declaration
  employees: any;
  headers: any

  constructor() {
    this.headers = ["ID", "Name", "Gender", "Salary", "DOJ", "Experience", "Phone no"]

    this.employees = [
      {
        empId: 10,
        empName: "Alice",
        empEmail: "alice@gmail.com",
        password: "password",
        gender: "F",
        salary: 50000,
        doj: "09/10/2009",
        phno: "1234567891",
        country: "India"
      },
      {
        empId: 20,
        empName: "Bob",
        empEmail: "bob@gmail.com",
        password: "password",
        gender: "M",
        salary: 26000,
        doj: "03/03/2015",
        phno: "1234567892",
        country: "USA",
      },
      {
        empId: 30,
        empName: "Carlie",
        empEmail: "carlie@gmail.com",
        password: "password",
        gender: "F",
        salary: 25000,
        doj: "04/06/2019",
        phno: "1234567893",
        country: "China"
      }
    ]
   }

  ngOnInit(): void {
  }

}
