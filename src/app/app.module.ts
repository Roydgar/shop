import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { MatButtonModule } from '@angular/material/button';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CartModule,
    ProductsModule,
    AboutModule,
    MatButtonModule // он подключен в SharedModule, тут лучше подключить SharedModule вместо MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
