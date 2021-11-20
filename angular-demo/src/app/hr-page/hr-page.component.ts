import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hr-page',
  templateUrl: './hr-page.component.html',
  styleUrls: ['./hr-page.component.css']
})
export class HrPageComponent implements OnInit {

  countries: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.countries = this.employeeService.getCountries();
    console.log(this.countries)
  }
}
