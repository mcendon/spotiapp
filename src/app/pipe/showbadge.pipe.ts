import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbadge'
})
export class ShowbadgePipe implements PipeTransform {

  transform(badge: any): unknown {
    if (typeof badge === 'string') {
      return badge;
    } else if (badge.name) {
      return badge.name;
    }
    return '';
  }

}
