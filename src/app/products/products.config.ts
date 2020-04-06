import { InjectionToken } from '@angular/core';

const productsBaseUrl = 'http://localhost:3000/products';
export const productsAPI = new InjectionToken<string>('productsAPI');

export const productsApiProvider = {
  provide: productsAPI,
  useValue: productsBaseUrl
};
