import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

import { OrderByOption } from '../../enums/order-by-option.enum';
import { MatSelectChange } from '@angular/material/select';
import { SortDirection } from '../../enums/sort-direction.enum';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  orderByOptions = OrderByOption;
  orderByOptionsKeys = Object.keys(OrderByOption);
  selectedOrderOption: string = OrderByOption.NAME;

  sortDirections = SortDirection;
  sortDirectionKeys = Object.keys(SortDirection);
  selectedSortDirection = SortDirection.DESC;

  constructor(public cartService: CartService) {
  }

  onDeleteClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.deleteItem(cartItemId);
  }

  onIncreaseQuantityClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.increaseQuantity(cartItemId);
  }

  onDecreaseQuantityClick(event: Event, cartItemId: number): void {
    event.preventDefault();
    this.cartService.decreaseQuantity(cartItemId);
  }

  onClearCartClick(event: Event) {
    event.preventDefault();
    this.cartService.clearProducts();
  }

  onChangeSelectOption(event: MatSelectChange) {
    this.selectedOrderOption = event.value;
  }

  onChangeSortDirectionOption(event: MatSelectChange) {
    this.selectedSortDirection = event.value;
  }
}
