import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../orders';
import { OrderModel } from '../../../orders';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  data$: Promise<OrderModel[]>;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders() {
    this.data$ = this.orderService.getOrders();
  }
}
