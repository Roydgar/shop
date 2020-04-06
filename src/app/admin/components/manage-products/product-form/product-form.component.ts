import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../products';
import { ProductCategory } from '../../../../products';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../../../products';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DialogService } from '../../../../core';
import { CanComponentDeactivate } from '../../../../core';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../../shared/components';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {

  product: ProductModel;
  originalProduct: ProductModel;

  selectedProductCategory: ProductCategory;
  productCategoryKeys = Object.keys(ProductCategory);

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService,
              private dialogService: DialogService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  onGoBack() {
    this.location.back();
  }

  onSave() {
    const product = {...this.product};

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }

    this.originalProduct = {...this.product};

    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      data: 'Product was Saved!'
    });
    this.onGoBack();
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const flags = Object.keys(this.product).map(key => {
      return this.product[key] === this.originalProduct[key];
    });

    if (flags.every(el => el)) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  onChangeProductCategory(event: MatSelectChange): void {
    this.selectedProductCategory = ProductCategory[event.value];
    this.product.category = this.selectedProductCategory;
  }

  onIsAvailableCheckBoxClick(event: MatCheckboxChange) {
    this.product.isAvailable = event.checked;
  }

  private loadProduct(): void {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = {...product};
      this.originalProduct = {...product};
      this.selectedProductCategory = product.category;
    });
  }
}
