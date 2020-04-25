import { Component, OnInit } from '@angular/core';
import { Order, OrderModel } from '../../model/order.model';
import { OrderComposer } from '../../services/order-composer.service';
import { MessageSnackbarComponent } from '../../../shared/components';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { orderEntityName } from '../../../core/@ngrx/data/entity-store.module';

@Component({
  selector: 'app-confirm-order-component',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  order: OrderModel;
  private orderService: EntityCollectionService<Order>;

  constructor(private router: Router,
              private location: Location,
              private orderComposer: OrderComposer,
              private snackBar: MatSnackBar,
              entityServices: EntityServices) {
    this.orderService = entityServices.getEntityCollectionService(orderEntityName);
  }

  ngOnInit(): void {
    this.composeOrder();
  }

  confirmOrder(): void {
    this.orderService.add(this.order);
    this.snackBar.openFromComponent(MessageSnackbarComponent, {
      data: 'Your order was created!'
    });

    this.router.navigate(['/order/process']);
  }

  onGoBack() {
    this.location.back();
  }

  private composeOrder() {
    this.order = this.orderComposer.composeOrderFromCart();
  }
}
