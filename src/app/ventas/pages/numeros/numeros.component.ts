import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas:number = 2567898.6548;
  porcentaje:number = 0.4856;

  constructor() { }

  ngOnInit(): void {
  }

}
