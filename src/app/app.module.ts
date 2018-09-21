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
<<<<<<< HEAD
import { FoodRecipeProvider } from '../providers/recipe/recipe';

import { HttpClientModule } from '../../node_modules/@angular/common/http';
=======
import { AuthProvider } from '../providers/auth/auth';
import { OnboardingPage } from '../pages/onboarding/onboarding';

>>>>>>> ebf9f928d1c0870f5a251d8a4e0df0546a9e76e5

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
    HttpClientModule,
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
<<<<<<< HEAD
    FoodRecipeProvider
=======
    AuthProvider
>>>>>>> ebf9f928d1c0870f5a251d8a4e0df0546a9e76e5
  ]
})
export class AppModule {}
