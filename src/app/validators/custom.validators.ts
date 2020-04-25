import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static consumerName(c: AbstractControl): ValidationErrors | null {
    if (c.value !== undefined && c.value !== '' && !/^[a-zA-Z]+$/.test(c.value)) {
      return {
        consumerName: false
      };
    }
  }
}
