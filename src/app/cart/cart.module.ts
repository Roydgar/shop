import { NgModule } from '@angular/core';
import { CartComponent } from './components';

import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartRoutingModule.components],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule {
}
