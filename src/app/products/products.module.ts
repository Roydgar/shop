import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { ProductService } from './services/product.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { CartService } from '../shared/services/cart.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    // обычно эти модули подключают в SharedModule, а его тут
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [ProductListComponent],
  providers: [ProductService, CartService] // CartService уже зарегистрирован в AppModule, можно тут убрать
})
export class ProductsModule { }
