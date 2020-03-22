import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], key: keyof any, sortDirection?: 'asc' | 'desc'): any[] {
    return orderBy(array, key, [sortDirection]);
  }
}
