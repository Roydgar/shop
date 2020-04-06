import { InjectionToken } from '@angular/core';

const ordersBaseUrl = 'http://localhost:3000/orders';
export const ordersAPI = new InjectionToken<string>('ordersAPI');

export const ordersAPIProvider = {
  provide: ordersAPI,
  useValue: ordersBaseUrl
};
