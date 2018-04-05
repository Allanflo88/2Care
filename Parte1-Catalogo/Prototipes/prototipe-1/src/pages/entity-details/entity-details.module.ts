import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityDetailsPage } from './entity-details';

@NgModule({
  declarations: [
    EntityDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EntityDetailsPage),
  ],
})
export class EntityDetailsPageModule {}
