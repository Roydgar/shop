import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsStoreModule } from './products/products-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './router/router.serializer';
import { routerFeatureKey, routerReducers } from './router/router.reducer';
import { RouterEffects } from './router/router.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false
      },
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: routerFeatureKey,
      serializer: RouterSerializer
    }),
    EffectsModule.forRoot([RouterEffects]),
    ProductsStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class RootStoreModule {
}
