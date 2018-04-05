import { EventProvider } from './../event/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  events: EventProvider[] = [];

  constructor(name: string) {
    this.name = name;
    this.favorite = false;
  }

  addEvent(event: EventProvider){
    this.events.push(event);
  }

}
