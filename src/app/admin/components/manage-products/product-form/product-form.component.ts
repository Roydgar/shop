import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../../../../products';
import { ProductCategory } from '../../../../products';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { DialogService } from '../../../../core';
import { CanComponentDeactivate } from '../../../../core';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../../shared/components';
import { ProductsFacade } from '../../../../core/@ngrx/products/products.facade';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  product: ProductModel;
  originalProduct: ProductModel;

  selectedProductCategory: ProductCategory;
  productCategoryKeys = Object.keys(ProductCategory);

  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private productsFacade: ProductsFacade,
              private location: Location,
              private dialogService: DialogService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onGoBack() {
    this.location.back();
  }

  onSave() {
    const product = {...this.product};

    if (product.id) {
      this.productsFacade.updateProduct(product);
    } else {
      this.productsFacade.createProduct(product);
    }

    this.originalProduct = product;
    this.snackBar.openFromComponent(MessageSnackbarComponent, { data: 'Product was Saved!'});
    this.onGoBack();
  }

  canDeactivate(): Observable<boolean> {
    return JSON.stringify(this.product) === JSON.stringify(this.originalProduct)
      ? of(true)
      : this.dialogService.confirm('Discard changes?');
  }

  onChangeProductCategory(event: MatSelectChange): void {
    this.selectedProductCategory = ProductCategory[event.value];
    this.product.category = this.selectedProductCategory;
  }

  onIsAvailableCheckBoxClick(event: MatCheckboxChange) {
    this.product.isAvailable = event.checked;
  }

  private loadProduct(): void {
    this.sub = this.productsFacade.selectSelectedProductByUrl()
      .pipe(take(1))
      .subscribe(product => {
        this.product = { ...product };
        this.originalProduct = { ...product};
      });
  }
}
