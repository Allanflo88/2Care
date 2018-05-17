import { Injectable } from '@angular/core';
import { EventProvider } from '../event/event';

/*
  Generated class for the EntityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntityProvider {

  name: string;
  favorite: boolean;
  descricao: string;
  dataFundacao: string;
  endereco = {
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: ""
  };
  events: EventProvider[] = []

  constructor(name: string, descr: string) {
    this.name = name;
    this.favorite = false;
    this.descricao = descr;
  }

  addEvent(entity, titulo, descr, ini, fim, time, img): void {
    var event: EventProvider = {
      titulo: titulo,
      descricao: descr,
      periodo: {
        inicio: ini,
        fim: fim,
        horario: time
      },
      img: img
    }
    this.events.push(event);
  }

  getEvents(): EventProvider[] {
    return this.events;
  }

}
