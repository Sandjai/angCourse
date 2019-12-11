import { Component, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { IProduct, products$ } from 'src/mock/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public titleText = 'myApp v1';
  public drawer: MatSidenav;
  public products$: Observable<IProduct[]> = products$;
  // public products: IProduct[]; // - добавили async pipe поэтому этот кусок не надо


  public setSideNav(drawer: MatSidenav): void {

    // Promise.resolve().then(()=> { - решение проблемы с event Loop №1
      this.drawer = drawer;
      // this.cd.detectChanges(); - решение проблемы с event Loop №4
    // }) - решение проблемы с event Loop №1
  }

/*
  public constructor(private cd: ChangeDetectorRef) { //- решение проблемы с event Loop №4 (добавить в зависимости вверху ChangeDetectorRef из @angular/core)

  }

  */


 public constructor() {

 }

 ngOnInit(): void {
  /*this.products$.subscribe((p: IProduct[])=> {
    this.products = p;
  })*/ // - добавили async pipe поэтому этот кусок не надо, так как ангуляр все это сделает сам + автоматически при разрушении компонента сделает все отписки
 }
}
