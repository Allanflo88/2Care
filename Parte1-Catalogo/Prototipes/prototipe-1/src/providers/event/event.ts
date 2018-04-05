import { Injectable } from '@angular/core';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  titulo: string;
  descricao: string;
  periodo = {
    inicio: "",
    fim: "",
    horario: ""
  };
  img: string;

  constructor(titulo: string, desc: string, ini: string, fim: string, time: string) {
    this.titulo = titulo;
    this.descricao = desc;
    this.periodo.inicio = ini;
    this.periodo.fim = fim;
    this.periodo.horario = time;
  }

}
