import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './layout';
import { AboutAppComponent } from './about';
import { LoginComponent } from './layout';
import { AuthGuard } from './core';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProcessOrderComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: PathNotFoundComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
