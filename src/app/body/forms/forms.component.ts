import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  cursosArray:any[]=[]; //declarar array vacio
  //se crea la funcion
  agregarCurso(inputCursos:String){
   this.cursosArray.push(String(inputCursos));
  };
  
}
