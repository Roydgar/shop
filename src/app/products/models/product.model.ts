import { ProductCategory } from '../enums/product-category.enum';

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean
  ) {}
}

