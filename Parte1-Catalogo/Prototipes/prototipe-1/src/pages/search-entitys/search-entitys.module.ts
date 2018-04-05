import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchEntitysPage } from './search-entitys';

@NgModule({
  declarations: [
    SearchEntitysPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchEntitysPage),
  ],
})
export class SearchEntitysPageModule {}
