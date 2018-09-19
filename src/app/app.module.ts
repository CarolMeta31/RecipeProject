import { LogoutPage } from './../pages/logout/logout';
import { ProfilePage } from './../pages/profile/profile';
import { FavouritePage } from './../pages/favourite/favourite';
import { CommunityPage } from './../pages/community/community';
import { OtherPage } from './../pages/other/other';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuggestionPage } from '../pages/suggestion/suggestion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,TabsPage,
    OtherPage,
    CommunityPage,
    SuggestionPage,
    FavouritePage,
    ProfilePage,
    LogoutPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    OtherPage,
    CommunityPage,
    SuggestionPage,
    FavouritePage,
    ProfilePage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
