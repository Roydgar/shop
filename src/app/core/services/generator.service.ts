import { Injectable } from '@angular/core';

export function generatorFactory(n: number) {
  return (generatorService: GeneratorService): string => generatorService.randomString(n);
}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

  constructor() {
  }

  randomString(n: number): string {
    let result = '';

    for (let i = 0; i < n; i++) {
      result += this.charset[Math.floor(Math.random() * this.charset.length)];
    }
    return result;
  }

  randomColor(): string {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  }
}
