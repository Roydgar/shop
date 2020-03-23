import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform<T>(array: T[], key: string, sortDirection?: 'asc' | 'desc'): T[] {
    return orderBy(array, key, [sortDirection]);
  }
}
