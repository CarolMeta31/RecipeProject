<<<<<<< HEAD
import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
=======
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { LogoutPage } from './../pages/logout/logout';
import { FavouritePage } from './../pages/favourite/favourite';
import { OtherPage } from './../pages/other/other';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
>>>>>>> ebf9f928d1c0870f5a251d8a4e0df0546a9e76e5
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

var config = {
  apiKey: "AIzaSyDBZ5GZiR6gRTwhAIvhjcgHtM-eS2Rg2BM",
  authDomain: "recipeproject-b080b.firebaseapp.com",
  databaseURL: "https://recipeproject-b080b.firebaseio.com",
  projectId: "recipeproject-b080b",
  storageBucket: "recipeproject-b080b.appspot.com",
  messagingSenderId: "689720004385"
};



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
=======
  rootPage :any ;

  pages: Array<{title: string, component: any}>;
>>>>>>> ebf9f928d1c0870f5a251d8a4e0df0546a9e76e5

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.pages = [
      { title: 'Favourites', component: FavouritePage  },
      { title: 'Profile ', component: ProfilePage },
      { title: 'LogOut ', component: LogoutPage }
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);

    const unsubscribe =firebase.auth().onAuthStateChanged(user=>{
      if (!user){
        this.rootPage='OnboardingPage';
        unsubscribe();
      }
      else{
        this.rootPage= OnboardingPage;
        unsubscribe();
      }
    })
    
  }
}

