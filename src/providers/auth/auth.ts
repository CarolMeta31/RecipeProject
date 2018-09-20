
import { Injectable } from '@angular/core';
import 'firebase/database';
import firebase , {User} from 'firebase/app';
import 'firebase/auth';
import {AlertController} from 'ionic-angular';
import {Platform} from "ionic-angular";

@Injectable()
export class AuthProvider {



  constructor(public alertCtrl: AlertController, public platform: Platform) {
    console.log('Hello AuthProvider Provider');
  }

  //login as a guest not a registered app user
  anonLogin(): Promise<any> {

    return firebase.auth().signInAnonymously()
      .then(response => {
        console.log(response);
      })
  }


    smsLogin(phoneNumber: number, recaptchaVerifier: firebase.auth.RecaptchaVerifier) {
      const appVerifier = recaptchaVerifier;
      const phoneNumberString = "+" + phoneNumber;
      //Signin with phonenumbers requires BOTH the phone number and a verified captcha
      firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
        .then(confirmationResult => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          let prompt = this.alertCtrl.create({
            title: 'Enter the Confirmation code',
            inputs: [{name: 'confirmationCode', placeholder: 'Confirmation Code'}],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Send',
                handler: data => {
                  confirmationResult.confirm(data.confirmationCode)
                    .then(function (result) {
                      // User signed in successfully.
                      console.log(result.user);
                      //Pop back to the previous page.
                      this.navCtrl.pop();
                    }).catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                    // ...
                  });
                }
              }
            ]
          });
          prompt.present();
        })
        .catch(function (error) {
          console.error("SMS not sent", error);
        });
  
    }
}
