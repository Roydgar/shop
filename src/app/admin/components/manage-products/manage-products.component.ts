import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductService } from '../../../products';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsFacade } from '../../../core/@ngrx/products/products.facade';
import { RouterFacade } from '../../../core/@ngrx/router/router.facade';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  data$: Observable<ReadonlyArray<ProductModel>>;

  constructor(private productsFacade: ProductsFacade,
              private routerFacade: RouterFacade,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data$ = this.productsFacade.products$;
  }

  onEdit(product: ProductModel) {
    console.log(product.id);
    // this.routerFacade.navigate({path: ['edit', product.id], extras: {relativeTo: this.route}});
    this.router.navigate(['edit', product.id], {relativeTo: this.route});
  }

  onAddNewProduct() {
    this.router.navigate(['add'], {relativeTo: this.route});
    // this.routerFacade.navigate({path: ['add'], extras: {relativeTo: this.route}});
  }
}
