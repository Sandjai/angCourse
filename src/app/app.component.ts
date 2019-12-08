import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titleText = 'myApp v1';
  public drawer: MatSidenav;
  public setSideNav(drawer: MatSidenav): void {
    
    Promise.resolve().then(()=> {
      this.drawer = drawer;
    })
  }


  public constructor() {

  }
}
