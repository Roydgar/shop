import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
  exports: [CartComponent]
})
export class CartModule {
}
