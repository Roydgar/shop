import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { HOME_PATH, VIEW_PRODUCT_PATH } from '../routes';

const routes: Routes = [
  {
    path: HOME_PATH,
    component: ProductListComponent
  },
  {
    path: VIEW_PRODUCT_PATH,
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
