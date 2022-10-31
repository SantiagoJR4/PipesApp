import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'santiago';
  nombreUpper:string = 'SANTIAGO';
  nombreCompleto:string='SantiAgO RoseRO';

  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
