import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './components';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'order/confirm',
    component: ConfirmOrderComponent
  },
  {
    path: 'order/process',
    component: ProcessOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [ConfirmOrderComponent];
}
