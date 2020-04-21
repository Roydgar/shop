import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AboutModule } from './about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { OrdersModule } from './orders/orders.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    CartModule,
    ProductsModule,
    AboutModule,
    OrdersModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
