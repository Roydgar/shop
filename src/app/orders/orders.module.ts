import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ordersAPIProvider } from './orders.config';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdersRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ],
  providers: [
    ordersAPIProvider
  ]
})
export class OrdersModule {
}
