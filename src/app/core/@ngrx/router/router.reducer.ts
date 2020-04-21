import { ActionReducerMap } from '@ngrx/store';
import { RouterState } from './router.state';
import { routerReducer } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export const routerReducers: ActionReducerMap<RouterState> = {
  router: routerReducer
};


