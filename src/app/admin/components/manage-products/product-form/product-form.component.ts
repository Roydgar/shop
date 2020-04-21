import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../../../../products';
import { ProductCategory } from '../../../../products';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
  import { pluck, switchMap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { DialogService } from '../../../../core';
import { CanComponentDeactivate } from '../../../../core';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSnackbarComponent } from '../../../../shared/components';
import { ProductsFacade } from '../../../../core/@ngrx/products/products.facade';
import { RouterFacade } from '../../../../core/@ngrx/router/router.facade';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  product: ProductModel;

  selectedProductCategory: ProductCategory;
  productCategoryKeys = Object.keys(ProductCategory);

  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private productsFacade: ProductsFacade,
              private routerFacade: RouterFacade,
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
    this.routerFacade.goBack();
  }

  onSave() {
    const product = {...this.product};

    if (product.id) {
      this.productsFacade.updateProduct(product);
    } else {
      this.productsFacade.createProduct(product);
    }

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
    const flags = [];

    return this.productsFacade.selectOriginalProduct().pipe(
      switchMap(originalProduct => {
        for (const key in originalProduct) {
          if (originalProduct[key] === this.product[key]) {
            flags.push(true);
          } else {
            flags.push(false);
          }
        }

        if (flags.every(el => el)) {
          return of(true);
        }

        return this.dialogService.confirm('Discard changes?');
      })
    );
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
      .subscribe(product => this.product = { ...product });
  }
}
