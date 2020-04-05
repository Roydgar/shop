import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from './layout/path-not-found/path-not-found.component';
import { HOME_PATH, NOT_FOUND_PATH } from './routes';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + HOME_PATH,
    pathMatch: 'full'
  },
  {
    path: NOT_FOUND_PATH,
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
