import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FoodRecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodRecipeProvider {


  url = 'https://api.edamam.com/search?q=';
  app_id= '&20app_id=41ba8518';
  app_key='&app_key=20423e8e5e1ecf7475de95fe564fd57723&from=0&to=10&calories=591-722&health=alcohol-free';
  
  //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
 getItem(item: string){
  return this.http.get(this.url+item+this.app_id+this.app_key);
 }
  

}
