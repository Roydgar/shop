import { Component, ElementRef, Inject, InjectionToken, OnInit, Optional, ViewChild } from '@angular/core';
import { ConstantsService, generatorFactory, GeneratorService, LocalStorageService } from '../../core';

const RANDOM_VALUE_TOKEN = new InjectionToken<string>('randomValue');

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css'],
  providers: [
    {provide: ConstantsService, useValue: {app: 'Shop Application', version: '1.0'}},
    {provide: RANDOM_VALUE_TOKEN, useFactory: generatorFactory(5), deps: [GeneratorService]}
  ]
})
export class AboutAppComponent implements OnInit {

  localStorageValue: string;

  @ViewChild('keyInput') keyInputRef: ElementRef;
  @ViewChild('valueInput') valueInputRef: ElementRef;

  constructor(private localStorageService: LocalStorageService,
              @Optional() public constantService: ConstantsService,
              @Inject(RANDOM_VALUE_TOKEN) public randomValue: string) {
  }

  ngOnInit(): void {
  }

  onGetByKey(input: any) {
    this.localStorageValue = this.localStorageService.getItem(input.target.value);
  }

  onSaveToStorageClick() {
    this.localStorageService.setItem(this.keyInputRef.nativeElement.value, this.valueInputRef.nativeElement.value);
    this.keyInputRef.nativeElement.value = '';
    this.valueInputRef.nativeElement.value = '';
  }
}
