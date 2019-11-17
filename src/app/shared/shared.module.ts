import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule} from '@angular/material';



@NgModule({
 exports: [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
 ]
  
 
 
})
export class SharedModule { }
