import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneno'
})
export class PhonenoPipe implements PipeTransform {

  code: any = {
      'India': '91', 
      'USA': '1', 
      'Pakistan': '92', 
      'China': '86', 
      'Africa': '27'
  };

  transform(value: any, ...args: unknown[]): unknown {
    return "+" + this.code[value.country] + " " + value.phno;
  }

}
