import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  onGoBack() {
    this.location.back();
  }

  private loadProduct(): void {
    this.route.data.subscribe((data: { product: ProductModel }) => {
      this.product = data.product;
    });
  }
}
