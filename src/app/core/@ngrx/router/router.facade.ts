import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as RouterActions from './router.actions';
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterFacade {

  constructor(private store: Store<AppState>) {
  }

  navigate(props: {
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }): void {
    this.store.dispatch(RouterActions.go(props));
  }

  goBack() {
    console.log('BAAACK');
    this.store.dispatch(RouterActions.back());
  }
}
