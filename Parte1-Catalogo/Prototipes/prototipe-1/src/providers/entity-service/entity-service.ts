import { EventProvider } from './../event/event';
import { EntityProvider } from './../entity/entity';
import { Injectable } from '@angular/core';

/*
  Generated class for the EntityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntityServiceProvider {

  entitys: EntityProvider[] = [];

  constructor() {
    this.addEntity(new EntityProvider("APAE", "Associação"))
    this.entitys[0].favorite = true;
    this.entitys[0].addEvent(this.entitys[0],"Festa Junina", "Realização da nossa festa junina típica",
  "11/06/18", "11/06/18", "18:00", "../../assets/imgs/festa-junina.jpg");
    this.addEntity(new EntityProvider("Lar São Vicente de Paulo", "Lar de idosos"));
    this.addEntity(new EntityProvider("AMAP", "Associação de Amparo aos Autistas de Piedade"));
    this.entitys[2].favorite = true;


  }

  getAll(): EntityProvider[] {
    return this.entitys;
  }

  getFavorites(): EntityProvider[] {
    var favorites = [];
    this.entitys.forEach(entity => {
      if (entity.favorite) {
        favorites.push(entity)
      }

    });
    return favorites;
  }

  getEvents(){
    var events = [];
    this.entitys.forEach((entity) =>{
      entity.getEvents().forEach((event)=>{

        events.push(event);
    })
    });
    return events;
  }

  addEntity(entity: EntityProvider): void{
    this.entitys.push(entity);
  }

}
