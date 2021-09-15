import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  //recibiendo los valores del componente padre app
  @Input() ingresoTotal: number;

  egresos: Egreso[] = [];
  constructor(private egresoService: EgresoServicio) {}

  ngOnInit() {
    this.egresos = this.egresoService.egresos; //metiendo en el arreglo egresos lo que tiene el arreglo del servicio egreso
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentajeEgreso(egreso: Egreso) {
    return (egreso.valor / this.ingresoTotal);
  }
}
