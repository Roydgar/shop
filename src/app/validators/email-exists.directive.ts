import { Directive } from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  Validator,
  AbstractControl
} from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';
import { CustomValidators } from './custom.validators';

@Directive({
  selector:
    '[appEmailExistsValidator][formControlName], [appEmailExistsValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailExistsDirective,
      multi: true
    }
  ]
})
export class EmailExistsDirective implements Validator {
  validate(
    c: AbstractControl
  ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (c.value === 'existsemail@example.com') {
          resolve({
            emailExists: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
