import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductService } from '../../../products';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  data$: Observable<ProductModel[]>;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data$ = this.productService.getProducts();
  }

  onEdit(product: ProductModel) {
    this.router.navigate(['edit', product.id], {relativeTo: this.route});
  }

  onAddNewProduct() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
