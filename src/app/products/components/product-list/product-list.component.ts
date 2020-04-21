import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../shared/components';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { RouterFacade } from '../../../core/@ngrx/router/router.facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ReadonlyArray<Product>>;
  error$: Observable<Error | string>;

  constructor(private cartService: CartService,
              private routerFacade: RouterFacade,
              private snackBar: MatSnackBar,
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
    this.routerFacade.navigate({ path });
  }
}
