import { EntityProvider } from './../../providers/entity/entity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntityDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entity-details',
  templateUrl: 'entity-details.html',
})
export class EntityDetailsPage {

  entity: EntityProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.entity = navParams.data;
  }

  setFavorite(){
    this.entity.favorite = true;
  }

  unsetFavorite(){
    this.entity.favorite = false;
  }

}
