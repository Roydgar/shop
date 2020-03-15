import { Injectable } from '@angular/core';
import { ConfigOptions } from '../../shared/models/config-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: ConfigOptions;

  constructor() { }

  setConfig(configOptions: ConfigOptions): void {
    this.configOptions = configOptions;
  }

  getConfig(configOptions: ConfigOptions): ConfigOptions {
    return this.configOptions;
  }
}
