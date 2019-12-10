import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter<MatSidenav>(true);  // - решение проблемы с event Loop №3 (лучшее - просто добавить isAsync = true)

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;
  

  ngOnInit() {
    this.setSideNavControl.emit(this.drawer);
  }

}
