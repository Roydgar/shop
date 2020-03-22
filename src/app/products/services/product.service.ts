import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductCategory } from '../enums/product-category.enum';
import { Observable } from 'rxjs';

const PRODUCTS = [
  new Product(1, 'Samsung Galaxy', 'Phone for real man', 500, ProductCategory.PHONE, true),
  new Product(2, 'Iphone 11', 'Phone for real woman', 1500, ProductCategory.PHONE, true),
  new Product(3, 'Xiaomi', 'Phone for real budget', 100, ProductCategory.PHONE, false),
];

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next(PRODUCTS);
      observer.complete();
    });
  }

}
