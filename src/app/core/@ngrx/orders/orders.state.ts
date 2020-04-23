import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Order } from '../../../orders';

export interface OrdersState extends EntityState<Order> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export function selectOrderId(order: Order): number {
  return order.id;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: selectOrderId,
});

export const initialOrdersState: OrdersState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});

