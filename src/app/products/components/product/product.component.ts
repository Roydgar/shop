import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel;

  constructor(private productsFacade: ProductsFacade,
              private location: Location) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  onGoBack() {
    this.location.back();
  }

  private loadProduct(): void {
    this.productsFacade.selectSelectedProductByUrl()
      .subscribe(product => this.product = product);
  }
}
