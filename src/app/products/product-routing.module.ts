import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent} from './components/product/product.component';
import { ProductListComponent} from './components/product-list/product-list.component';

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
