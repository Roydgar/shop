import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent, ProductListComponent } from './components';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':productID',
        component: ProductComponent,
        resolve: {
          product: ProductResolveGuard
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
  static components = [ProductComponent, ProductListComponent];
}
