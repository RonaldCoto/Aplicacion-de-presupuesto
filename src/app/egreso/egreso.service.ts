import { Egreso } from './egreso.model';

export class EgresoServicio {
  //Declaracion de arreglo del tipo "egreso"(clase modelo)

  egresos: Egreso[] = [
    new Egreso('Despensa', 200),
    new Egreso('Auto nuevo', 3000),
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);//almacena el indice del elemento
    this.egresos.splice(indice, 1);//elimina unicamente un el elemento segun el indice
  }
}
