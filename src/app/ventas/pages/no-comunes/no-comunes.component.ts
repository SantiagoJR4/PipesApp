import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect 
  nombre:string='Andres';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria','Pedro','Santiago','Alejandro']
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }

  cambiarPersona(){
    this.nombre='Maria';
    this.genero='femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue Pipe

  persona={
    nombre:'Santiago',
    edad:23,
    direccion:'Pasto, Colombia'
  }

  //JsonPipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true,
    },
    {
      nombre:'Robín',
      vuela:false,
    },
    {
      nombre:'aquaman',
      vuela:false,
    }
  ]

  //Async Pipe
  miObservable=interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
