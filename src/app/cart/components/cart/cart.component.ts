import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/model/product.model';
import { ProductCategory } from '../../../products/enums/product-category.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      new Product('Samsung Galaxy', 'Phone for real man', 500, ProductCategory.PHONE, true)
    ];
  }
}
