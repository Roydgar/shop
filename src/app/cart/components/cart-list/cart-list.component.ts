import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../shared';

import { OrderByOption } from '../../enums/order-by-option.enum';
import { MatSelectChange } from '@angular/material/select';
import { SortDirection } from '../../enums/sort-direction.enum';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  orderByOptions = OrderByOption;
  orderByOptionsKeys = Object.keys(OrderByOption);
  selectedOrderOption: string = OrderByOption.NAME;

  sortDirections = SortDirection;
  sortDirectionKeys = Object.keys(SortDirection);
  selectedSortDirection = SortDirection.DESC;

  cartItems: CartItem[];
  private subscription: Subscription;

  constructor(public cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCartItems();
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
    this.cartService.clearCart();
  }

  onChangeSelectOption(event: MatSelectChange) {
    this.selectedOrderOption = event.value;
  }

  onChangeSortDirectionOption(event: MatSelectChange) {
    this.selectedSortDirection = event.value;
  }

  areCartItemsEmpty(): boolean {
    return this.cartItems && this.cartItems.length === 0;
  }

  onViewInfo(cartItem: CartItem) {
    const link = ['/products', cartItem.product.id];
    this.router.navigate(link);
  }

  confirmOrder() {
    this.router.navigate(['order/confirm']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadCartItems() {
    this.cartItems = this.cartService.cartItems;

    this.subscription = this.cartService.channel$.subscribe(
      items => this.cartItems = items
    );
  }
}
