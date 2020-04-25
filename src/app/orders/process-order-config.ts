import { InjectionToken } from '@angular/core';

export interface ProcessOrderConfig {
  consumerNameMinLength;
  phoneRegex: string;
}

const processOrderConfig: ProcessOrderConfig = {
  consumerNameMinLength: 3,
  phoneRegex: '((\\+38)?\\(?\\d{3}\\)?[\\s\\.-]?(\\d{7}|\\d{3}[\\s\\.-]\\d{2}[\\s\\.-]\\d{2}|\\d{3}-\\d{4}))'
};

export const processOrderConfigToken = new InjectionToken<string>('validationConfig');

export const processOrderConfigProvider = {
  provide: processOrderConfigToken,
  useValue: processOrderConfig
};
