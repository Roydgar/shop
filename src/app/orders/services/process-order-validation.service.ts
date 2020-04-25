import { Inject, Injectable } from '@angular/core';
import { ProcessOrderConfig, processOrderConfigToken } from '../process-order-config';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProcessOrderValidationService {

  private validationMessagesDefinitions = {
    firstName: {
      required: 'First name is required',
      minlength: 'Please enter at least ',
      consumerName: 'First Name should contain only letters',
    },
    lastName: {
      required: 'Last name is required',
      minlength: 'Please enter at least ',
      consumerName: 'Last Name should contain only letters'
    },
    email: {
      required: 'Email field is required',
      email: 'Please enter a valid email containing "@" and the domain',
      emailExists: 'Given email is already registered'
    },
    deliveryAddress: {
      required: 'Delivery Address field is required',
      minlength: 'Please enter at least 3 letters'
    },
    phone: {
      required: 'Phone field is required',
      pattern: 'Please enter a valid phone, e.g.+380502566219'
    },
  };

  validationMessages = {
    firstName: null,
    lastName: null,
    email: null,
    deliveryAddress: null,
    phone: {}
  };

  constructor(@Inject(processOrderConfigToken) public config: ProcessOrderConfig) {
    this.validationMessagesDefinitions.firstName.minlength += config.consumerNameMinLength + ' letters';
    this.validationMessagesDefinitions.lastName.minlength += config.consumerNameMinLength + ' letters';
  }

  public setValidationMessage(control: AbstractControl, controlName: string): void {
    this.validationMessages[controlName] = this.createValidationMessage(control, controlName);
  }

  public setValidationMessageWithIndex(c: AbstractControl, controlName: string, index: number): void {
    const message = this.createValidationMessage(c, controlName);
    this.validationMessages[controlName] = { ...this.validationMessages[controlName] , [index]: message };
  }

  public deleteValidationMessage(controlName: string, index: number): void {
    const { [index]: removed, ...validationMessages } = this.validationMessages[controlName];
    this.validationMessages[controlName] = validationMessages;
  }

  private createValidationMessage(c: AbstractControl, controlName: string): string {
    if (this.isValidationFailed(c)) {
      return Object.keys(c.errors)
        .map(key => this.validationMessagesDefinitions[controlName][key])
        .join('; ');
    }

    return null;
  }

  private isValidationFailed(c: AbstractControl): boolean {
    return (c.touched || c.dirty) && !!c.errors;
  }
}
