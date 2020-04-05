import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHighlightDirective } from './directives/element-highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BorderOnMouseLeaveDirective } from './directives/border-on-mouse-leave.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderByPipe } from './pipes/order-by.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ElementHighlightDirective, BorderOnMouseLeaveDirective, OrderByPipe],
  exports: [
    ElementHighlightDirective,
    BorderOnMouseLeaveDirective,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    OrderByPipe,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
