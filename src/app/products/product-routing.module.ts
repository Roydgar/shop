import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent, ProductListComponent } from './components';
import { ProductResolveGuard } from './guards/product-resolve.guard';
import { ProductsStatePreloadingGuard } from './guards/products-state-preloading.guard';
import { CheckProductExistingGuard } from './guards/check-product-existing-guard.service';

const routes: Routes = [
  {
    path: 'products',
    canActivate: [ProductsStatePreloadingGuard],
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':productID',
        component: ProductComponent,
        canActivate: [CheckProductExistingGuard],
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
