import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../model/order.model';
import { OrderService } from '../../services/order.service';
import { Location } from '@angular/common';
import { MessageSnackbarComponent } from '../../../shared/components';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order-component',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  order: OrderModel;

  constructor(private orderService: OrderService,
              private location: Location,
              private router: Router,
              private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.composeOrder();
  }

  confirmOrder(): void {
    this.orderService.createOrder(this.order);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      data: 'Your order was created!'
    });

    this.router.navigate(['/order/process']);
  }

  onGoBack() {
    this.location.back();
  }

  private composeOrder() {
    this.order = this.orderService.composeOrderFromCart();
  }
}
