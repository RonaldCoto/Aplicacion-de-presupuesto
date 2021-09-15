import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];
  constructor(private ingresoService: IngresoServicio) {}

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos; //metiendo en el arreglo ingresos lo que tiene el arreglo del servicio ingresos
  }

  eliminaRegistro(ingreso:Ingreso){
    this.ingresoService.eliminar(ingreso);
  }
}
