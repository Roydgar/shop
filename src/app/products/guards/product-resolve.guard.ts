import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel> {

  constructor(private productService: ProductService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> | Promise<ProductModel> | ProductModel {
    if (!route.paramMap.has('productID')) {
      return new ProductModel(0, '', '', 0, null, false);
    }

    const productId = +route.paramMap.get('productID');

    return this.productService.getProductById(productId).pipe(
      map(product => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/home']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(null);
      })
    );
  }
}
