import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { processOrderConfigProvider } from './process-order-config';

@NgModule({
  declarations: [OrdersRoutingModule.components, ProcessOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    OrdersRoutingModule
  ],
  providers: [
    processOrderConfigProvider
  ]
})
export class OrdersModule {
}
