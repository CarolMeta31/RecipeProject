import { SuggestionPage } from './../pages/suggestion/suggestion';
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
import { AuthProvider } from '../providers/auth/auth';
import { OnboardingPage } from '../pages/onboarding/onboarding';


@NgModule({
  declarations: [
    MyApp,
    HomePage,TabsPage,
    OtherPage,
    CommunityPage,
    SuggestionPage,
    FavouritePage,
    ProfilePage,
    LogoutPage,
    OnboardingPage
 

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
    LogoutPage,
    OnboardingPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
