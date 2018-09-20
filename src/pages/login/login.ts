import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Alert,LoadingController,
  Loading } from 'ionic-angular';
  import { AuthProvider } from './../../providers/auth/auth';
  import { HomePage } from './../home/home';
  import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private load:Loading;

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor(public navCtrl: NavController,
    public loadCtrl:LoadingController,
    public alertCtrl:AlertController,private authPro:AuthProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

//Delegate request to auth provider
smsLogin(phoneNum: number){
  this.authPro.smsLogin(phoneNum,this.recaptchaVerifier);
}
}
