import { Component, OnInit } from '@angular/core';
import { Order } from '../../../orders';
import { OrderModel } from '../../../orders';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { orderEntityName } from '../../../core/@ngrx/data/entity-store.module';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  data$: Observable<OrderModel[]>;

  private orderService: EntityCollectionService<Order>;

  constructor(entityServices: EntityServices) {
    this.orderService = entityServices.getEntityCollectionService(orderEntityName);
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders() {
    this.data$ = this.orderService.getAll();
  }
}
