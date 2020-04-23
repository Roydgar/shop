import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EntityMetadataMap,
  EntityDataModule,
  DefaultDataServiceConfig
} from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/'
};

export const orderEntityName = 'Order';

const pluralNames = {
  Order: 'Order'
};

export const entityMetadata: EntityMetadataMap = {
  Order: {}
};

@NgModule({
  imports: [
    CommonModule,
    EntityDataModule.forRoot({ entityMetadata, pluralNames })
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class EntityStoreModule {}
