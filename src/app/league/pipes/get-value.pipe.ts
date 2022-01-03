import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValue'
})
export class GetValuePipe implements PipeTransform {

  transform(value: any, property?: string): string {
    return property? value[property]: '';
  }

}
