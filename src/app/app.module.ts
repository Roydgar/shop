import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { CartService } from './shared/services/cart.service';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ],
  providers: [CartService], // немного устаревший способ регистрации сервисов
  bootstrap: [AppComponent]
})
export class AppModule {
}
