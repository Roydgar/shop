import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHighlightDirective } from './directives/element-highlight.directive';

@NgModule({
  declarations: [ElementHighlightDirective],
  exports: [
    ElementHighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
