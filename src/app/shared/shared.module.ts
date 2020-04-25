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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from './components';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { ValidatorsModule } from '../validators/validators.module';

@NgModule({
  declarations: [ElementHighlightDirective, BorderOnMouseLeaveDirective, OrderByPipe, MessageSnackbarComponent],
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
    MatSnackBarModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    OrderByPipe,
    MessageSnackbarComponent,
    CommonModule,
    ValidatorsModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
