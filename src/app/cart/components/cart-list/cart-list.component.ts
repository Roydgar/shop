import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { OrderByOption } from '../../enums/order-by-option.enum';
import { MatSelectChange } from '@angular/material/select';
import { SortDirection } from '../../enums/sort-direction.enum';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;

  orderByOptions = OrderByOption;
  orderByOptionsKeys = Object.keys(OrderByOption);
  selectedOrderOption: string = OrderByOption.NAME;

  sortDirections = SortDirection;
  sortDirectionKeys = Object.keys(SortDirection);
  selectedSortDirection = SortDirection.ASC;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getChannel();
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
