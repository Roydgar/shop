import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailExistsDirective } from './email-exists.directive';



@NgModule({
  declarations: [EmailExistsDirective],
  exports: [
    EmailExistsDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ValidatorsModule { }
