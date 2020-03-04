import { Product } from '../../shared/models/product.model';

export class CartItem {

  constructor(
    public id: number,
    public product: Product,
    public quantity: number
  ) {
  }

}
