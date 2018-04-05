import { SearchEntitysPage } from './../pages/search-entitys/search-entitys';
import { ProfilePage } from './../pages/profile/profile';
import { EntityDetailsPage } from './../pages/entity-details/entity-details';
import { AboutPage } from './../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntityProvider } from '../providers/entity/entity';
import { EntityServiceProvider } from '../providers/entity-service/entity-service';
import { EventProvider } from '../providers/event/event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    EntityDetailsPage,
    ProfilePage,
    SearchEntitysPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    EntityDetailsPage,
    ProfilePage,
    SearchEntitysPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntityProvider,
    EntityServiceProvider,
    EventProvider
  ]
})
export class AppModule {}
