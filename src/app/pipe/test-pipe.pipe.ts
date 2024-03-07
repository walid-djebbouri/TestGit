import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const [firstName, lastName, age] = args;
    return   `${value} ${firstName} ${lastName} ${age} `  ;
  }

}
