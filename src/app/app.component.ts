import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {
    this.ingresos = ingresoServicio.ingresos; //arreglo this.ingresos que se llena con los valores del arreglo ingresos en servicios
    this.egresos = egresoServicio.egresos; //arreglo this.egresos que se llena con los valores del arreglo egresos en servicios
  }

  GetIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      //ingreso es un atributo cualquiera, solo sirve para acceder a las propiedades del arreglo
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  GetEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      //egreso es un atributo cualquiera, solo sirve para acceder a las propiedades del arreglo
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  GetPorcentajeTotal() {
    return this.GetEgresoTotal() / this.GetIngresoTotal();
  }

  GetPresupuestoTotal() {
    return this.GetIngresoTotal() - this.GetEgresoTotal();
  }
}
