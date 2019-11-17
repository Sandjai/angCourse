import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter<MatSidenav>();

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.drawer.toggle();

    }, 5000);
  }

}
