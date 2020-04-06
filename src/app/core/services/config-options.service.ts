import { Injectable } from '@angular/core';
import { ConfigOptions } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: ConfigOptions;

  constructor() { }

  setConfig(configOptions: ConfigOptions): void {
    this.configOptions = { ...this.configOptions, ...configOptions};
  }

  getConfig(configOptions: ConfigOptions): ConfigOptions {
    return this.configOptions;
  }
}
