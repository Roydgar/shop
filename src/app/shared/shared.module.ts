import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHighlightDirective } from './directives/element-highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ElementHighlightDirective],
  exports: [
    ElementHighlightDirective,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
