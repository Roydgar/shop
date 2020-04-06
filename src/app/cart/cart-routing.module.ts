import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components';
import { CartListComponent } from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: '',
        component: CartListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent, CartListComponent];
}
