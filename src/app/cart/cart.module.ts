import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartItemComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule {
}
