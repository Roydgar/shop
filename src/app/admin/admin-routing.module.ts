import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { CanDeactivateGuard } from '../core';
import { ProductFormComponent } from './components/manage-products';
import { ProductResolveGuard } from '../products';
import { AuthGuard } from '../core';
import { ManageOrdersComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'orders',
            component: ManageOrdersComponent
          },
          {
            path: 'products',
            children: [
              {
                path: 'add',
                canDeactivate: [CanDeactivateGuard],
                component: ProductFormComponent
              },
              {
                path: 'edit/:productID',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                  product: ProductResolveGuard
                }
              },
              {
                path: '',
                component: ManageProductsComponent
              }
            ]
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminDashboardComponent,
    AdminComponent,
    ManageProductsComponent,
    ProductFormComponent,
    ManageOrdersComponent
  ];
}
