import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HOME_PATH, PRODUCT_ID_PATH_VARIABLE } from '../../../routes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct(): void {
    const observer = {
      next: (product: Product) => (this.product = {... product}),
      error: (err: any) => (console.log(err))
    };

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productService.getProductById(+params.get(PRODUCT_ID_PATH_VARIABLE)))
    ).subscribe(observer);
  }

  onGoBack() {
    this.router.navigate([HOME_PATH]);
  }
}
