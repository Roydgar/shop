import { Injectable } from '@angular/core';

export function generatorFactory(n: number) {
  return (generatorService: GeneratorService): string  => generatorService.next(n);
}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  constructor() { }

  next(n: number): string {
    let result = '';

    for (let i = 0; i < n; i++) {
      result += this.charset[Math.floor(Math.random() * this.charset.length)];
    }
    return result;
  }
}