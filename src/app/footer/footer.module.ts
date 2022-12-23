import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInfoComponent } from './footer-info/footer-info.component';



@NgModule({
  declarations: [
    FooterInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterInfoComponent
  ]
})
export class FooterModule { }
