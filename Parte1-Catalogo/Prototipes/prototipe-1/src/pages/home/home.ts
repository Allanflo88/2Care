import { EventProvider } from './../../providers/event/event';
import { EntityDetailsPage } from './../entity-details/entity-details';
import { EntityServiceProvider } from './../../providers/entity-service/entity-service';
import { SearchEntitysPage } from './../search-entitys/search-entitys';
import { EntityProvider } from './../../providers/entity/entity';
import { AboutPage } from './../about/about';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favorites: EntityProvider[];
  events: EventProvider[] = []

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private entitys: EntityServiceProvider) {
    this.events = entitys.getEvents();
  }
  openMenu(): void{
    this.favorites = this.entitys.getFavorites();
    if(this.menuCtrl.isOpen()){
      this.menuCtrl.close();
    }
    else{
      this.menuCtrl.open();
    }
    
  }

  openEntity(favorite: EntityProvider): void{
    this.openMenu();
    this.navCtrl.push(EntityDetailsPage, favorite);
  }

  openProfile(){
    this.navCtrl.push(ProfilePage);
  }

  openAbout(){
    this.openMenu()
    this.navCtrl.push(AboutPage);
  }
  openSearch(){
    this.navCtrl.push(SearchEntitysPage);
  }


}
