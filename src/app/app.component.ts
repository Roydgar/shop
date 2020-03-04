import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('appTitle')
  private elementRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeHeader() {
    this.elementRef.nativeElement.textContent = 'My Custom Title';
  }
}
