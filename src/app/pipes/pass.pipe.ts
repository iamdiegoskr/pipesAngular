import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, show:boolean = false): string {
    console.log('ju'.repeat(3))
    return (show) ?  '*'.repeat(value.length) : value ;
  }

}
