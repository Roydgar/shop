import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  constructor(public productService: ProductService,
              private cartService: CartService,
              private router: Router) {
  }

  onBuy(event: Event, product: Product): void {
    event.preventDefault();
    this.cartService.addProduct(product);
  }

  onViewInfo(event: MouseEvent, product: Product) {
    const link = ['/view', product.id];
    this.router.navigate(link);
  }
}
