import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAppComponent } from './about-app/about-app.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AboutAppComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AboutAppComponent]
})
export class AboutModule { }
