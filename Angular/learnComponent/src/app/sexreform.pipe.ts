import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexreform'
})
export class SexreformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
