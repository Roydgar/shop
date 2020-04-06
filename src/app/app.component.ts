import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onActivate(event: any, routerOutlet: RouterOutlet) {
    console.log('Activated component ', event, routerOutlet);
  }

  onDeactivate(event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated component ', event, routerOutlet);
  }
}
