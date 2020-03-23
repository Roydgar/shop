import { NgModule } from '@angular/core';
import { AboutAppComponent } from './about-app/about-app.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutAppComponent],
  imports: [
    SharedModule
  ],
  exports: [AboutAppComponent]
})
export class AboutModule { }
