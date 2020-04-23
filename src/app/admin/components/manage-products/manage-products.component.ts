import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  data$: Observable<ReadonlyArray<ProductModel>>;

  constructor(private productsFacade: ProductsFacade,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data$ = this.productsFacade.products$;
  }

  onEdit(product: ProductModel) {
    this.router.navigate(['edit', product.id], { relativeTo: this.route });
  }

  onAddNewProduct() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
