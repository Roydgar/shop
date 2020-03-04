import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../../shared/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  cartItems: CartItem[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getChannel().subscribe(
      data => (this.cartItems = data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get totalPrice() {
    return this.cartService.totalPrice();
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
}
