import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onBuy(product: Product): void {
    this.cartService.addProduct(product);
  }
}
