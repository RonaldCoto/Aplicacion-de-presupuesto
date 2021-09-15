import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  //declaración de arreglo de tipo "Ingreso"(Clase modelo)
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta de coche', 500),
  ];

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);//almacena el inidice del elemento
    this.ingresos.splice(indice, 1); //elimina unicamente un el elemento segun el indice
  }
}
