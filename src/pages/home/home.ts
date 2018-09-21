import { FoodRecipeProvider } from './../../providers/recipe/recipe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ///our main object
  recipe:any;
  //ingredientLines:any;
  item: any;
  filteredusers = [];
  temparr = [];
  //Recipe
  uri: string;
  mylabel: string;
  mysource: string;
  image: string;
  url: string;
 // yield:	number;
  calories:	number;
  totalWeight:	number;
  food: string;
  
  ingredientLines:string;
  
  constructor(public navCtrl: NavController, private foodProvider: FoodRecipeProvider) {

  }
  

  getItem(cvalue:any){
    this.foodProvider.getItem(this.item).subscribe(results=>{
      this.recipe=results;
 

       

        this.mysource=this.recipe.hits[0].recipe.source;
        this.uri=this.recipe.hits[0].recipe.uri;
        this.mylabel=this.recipe.hits[0].recipe.label;
        this.image=this.recipe.hits[0].recipe.image;
       // this.yield=this.recipe.hits[0].recipe.yield;
        this.calories=this.recipe.hits[0].recipe.calories;

       this.ingredientLines=this.recipe.hits[0].recipe.ingredientLines[1];
     
          console.log("response",results);
    }, (err) =>{
      alert("failed loading data");
    });
 
  }

 
}
