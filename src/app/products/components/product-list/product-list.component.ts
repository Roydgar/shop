import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../shared/components';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data$: Observable<ProductModel[]>;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.data$ = this.productService.getProducts();
  }

  onBuy(event: Event, product: ProductModel): void {
    event.preventDefault();
    this.cartService.addProduct(product);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      data: 'Product was Added to Cart!'
    });
  }

  onViewInfo(event: Event, product: ProductModel) {
    event.preventDefault();
    const link = ['/products', product.id];
    this.router.navigate(link);
  }
}
