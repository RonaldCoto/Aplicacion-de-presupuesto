import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  
  //recibiendo los valores del componente padre app
  @Input() egresoTotal: number;
  @Input() ingresoTotal: number;
  @Input() porcentajeTotal: number;
  @Input() presupuestoTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
