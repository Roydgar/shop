import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  constructor(public productService: ProductService, private cartService: CartService) {
  }

  onBuy(event: Event, product: Product): void {
    event.preventDefault();
    this.cartService.addProduct(product);
  }
}
