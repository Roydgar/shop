import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductCategory } from '../enums/product-category.enum';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      new Product(1, 'Samsung Galaxy', 'Phone for real man', 500, ProductCategory.PHONE, true),
      new Product(2, 'Iphone 11', 'Phone for real woman', 1500, ProductCategory.PHONE, true),
      new Product(3, 'Xiaomi', 'Phone for real budget', 100, ProductCategory.PHONE, false),
    ];
  }

}
