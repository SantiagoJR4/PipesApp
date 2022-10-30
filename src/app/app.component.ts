import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre : string= 'SaNtiaGo roseRo';
  valor:number = 1000;
  obj ={
    nombre: 'Jose Rosero',
    Celular: 3222927822
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
