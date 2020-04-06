import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: AdminRoutingModule.components,
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatToolbarModule
  ]
})
export class AdminModule {
}
