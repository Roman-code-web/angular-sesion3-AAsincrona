import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    TitleComponent,
    FormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TitleComponent,
    FormsComponent
  ]
})
export class BodyModule { }
