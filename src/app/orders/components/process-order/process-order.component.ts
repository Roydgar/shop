import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {
  ProcessOrderConfig
} from '../../process-order-config';
import { ProcessOrderValidationService } from '../../services/process-order-validation.service';
import { Subscription } from 'rxjs';
import { CustomValidators } from '../../../validators/custom.validators';
import { ProcessOrderField } from '../../enums/process-order-field.enum';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {

  form: FormGroup;
  validationMessages: any;
  fields = ProcessOrderField;

  private config: ProcessOrderConfig;
  private sub: Subscription;

  constructor(private fb: FormBuilder,
              private validationService: ProcessOrderValidationService) {
    this.config = validationService.config;
    this.validationMessages = validationService.validationMessages;
  }

  ngOnInit(): void {
    this.buildForm();
    this.watchValueChanges();
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onControlBlur(controlName: string): void {
    const control = this.form.controls[controlName];
    this.validationService.setValidationMessage(control, controlName);
  }

  onArrayControlBlur(formArray: FormArray, controlName: string, controlIndex: number): void {
    const control = formArray.at(controlIndex).get(controlName);
    this.validationService.setValidationMessageArray(control, controlName, controlIndex);
  }

  buildForm(): void {
    this.form = this.fb.group({
      [this.fields.FIRST_NAME]: new FormControl('', {
        validators: [Validators.required,
          Validators.minLength(this.config.consumerNameMinLength),
          CustomValidators.consumerName
        ]
      }),
      [this.fields.LAST_NAME]: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(this.config.consumerNameMinLength),
          CustomValidators.consumerName]
      }),
      [this.fields.EMAIL]: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      [this.fields.PHONES]: this.fb.array([this.buildPhone()]),
      [this.fields.DELIVERY_REQUIRED]: false,
      [this.fields.DELIVERY_ADDRESS]: new FormControl('', {
        validators: this.getDeliveryAddressValidators
      })
    });
  }

  onSave(): void {
    console.log(this.form);
    console.log(`Saved: ${JSON.stringify(this.form.value)}`);
    console.log(`Saved: ${JSON.stringify(this.form.getRawValue())}`);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onDeletePhone(index: number, controlName: string): void {
    this.phones.removeAt(index);
    this.validationService.deleteValidationMessageArray(controlName, index);
  }

  get phones(): FormArray {
    return this.form.get(this.fields.PHONES) as FormArray;
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.config.phoneRegex)]
      })
    });
  }

  private watchValueChanges(): void {
    this.sub = this.form.get(this.fields.DELIVERY_REQUIRED).valueChanges
      .subscribe(value => this.setDeliveryAddress(value));

    const emailControl = this.form.get(this.fields.EMAIL);
    const emailMessageSub = emailControl.statusChanges
      .subscribe(value => this.validationService.setValidationMessage(emailControl, this.fields.EMAIL));

    this.sub.add(emailMessageSub);
  }

  private setDeliveryAddress(deliveryRequired: boolean) {
    const addressControl = this.form.get(this.fields.DELIVERY_ADDRESS);

    if (deliveryRequired) {
      addressControl.setValidators(this.getDeliveryAddressValidators());
    } else {
      addressControl.clearValidators();
    }
    addressControl.updateValueAndValidity();
  }

  private getDeliveryAddressValidators(): ValidatorFn[] {
    return [Validators.required];
  }
}
