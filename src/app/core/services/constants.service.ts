import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  app: string;
  version: string;

  constructor() {
  }
}
