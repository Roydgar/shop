import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule {
}
