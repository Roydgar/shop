import { Component, OnInit } from '@angular/core';
import { Product } from './products/model/product.model';
import { ProductService } from './products/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
