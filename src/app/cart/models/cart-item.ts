import { ProductModel } from '../../products';

export class CartItem {

  constructor(
    public id: number,
    public product: ProductModel,
    public quantity: number
  ) {
  }

}
