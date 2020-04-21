import { ProductCategory } from '../enums/product-category.enum';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}

export class ProductModel implements Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean
  ) {}
}

