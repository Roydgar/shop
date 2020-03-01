import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductsModule } from '../products/products.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ProductsModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
