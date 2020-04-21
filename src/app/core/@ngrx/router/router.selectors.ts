import { RouterStateUrl } from './router.state';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { routerFeatureKey } from './router.reducer';

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);

export const {
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl
} = getSelectors(selectRouterState);
