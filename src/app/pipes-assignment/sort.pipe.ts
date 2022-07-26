import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a:any,b:any)=>{
      return a[propName] > b[propName] ? 1 : -1
    })
  }

}
