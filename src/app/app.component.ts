import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  onActivate(event: any, routerOutlet: RouterOutlet) {
    console.log('Activated component ', event, routerOutlet);
  }

  onDeactivate(event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated component ', event, routerOutlet);

  }
}
