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
    this.addEntity(new EntityProvider("APAE"))
    this.entitys[0].favorite = true;
    this.addEntity(new EntityProvider("Lar São Vicente de Paulo"));
    this.addEntity(new EntityProvider("AMAP"));
    this.entitys[2].favorite = true;
    this.entitys[2].descricao = "Associação de Amparo aos Autistas de Piedade";


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

  addEntity(entity: EntityProvider){
    this.entitys.push(entity);
  }

}
