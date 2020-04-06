import { NgModule } from '@angular/core';
import { ProductListComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { productsApiProvider } from './products.config';

@NgModule({
  declarations: [ProductRoutingModule.components],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  exports: [ProductListComponent],
  providers: [
    productsApiProvider
  ]
})
export class ProductsModule {
}
