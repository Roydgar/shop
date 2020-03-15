import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  cartItems: CartItem[];
  private subscription: Subscription;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getChannel().subscribe(
      data => (this.cartItems = data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
