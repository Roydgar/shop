import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from '../../models/product.model';
import { CartService } from '../../../shared';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../shared/components';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ReadonlyArray<Product>>;
  error$: Observable<Error | string>;

  constructor(private cartService: CartService,
              private snackBar: MatSnackBar,
              private router: Router,
              private productsFacade: ProductsFacade) {
  }

  ngOnInit(): void {
    this.products$ = this.productsFacade.products$;
    this.error$ = this.productsFacade.productsError;
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

    const path = ['/products', product.id];
    this.router.navigate(path);
  }
}
