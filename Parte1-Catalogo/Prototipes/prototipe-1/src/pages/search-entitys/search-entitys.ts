import { EntityDetailsPage } from './../entity-details/entity-details';
import { EntityProvider } from './../../providers/entity/entity';
import { EntityServiceProvider } from './../../providers/entity-service/entity-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchEntitysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-entitys',
  templateUrl: 'search-entitys.html',
})
export class SearchEntitysPage {

  entitys: EntityProvider[] = []
  search: string = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, private entityService: EntityServiceProvider) {
    this.entitys = this.entityService.getAll();
  }

  onInput(): EntityProvider[]{
    this.entitys = this.entityService.getAll();
    var filter: EntityProvider[] = [];
    this.entitys.forEach(entity => {
      if(entity.name.includes(this.search)){
        filter.push(entity);
      }
    });
    this.entitys = filter;
    return this.entitys;
  }

  openDetails(entity): void{
    this.navCtrl.push(EntityDetailsPage, entity);
  }
}
