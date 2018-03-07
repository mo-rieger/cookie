import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../models/recipe.model";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController, private recipeService: RecipeService) {  }

  getRecipe(recipeUrl: string) {
    this.recipeService.getRecipe(recipeUrl).subscribe(
      data => {console.log(data)},
      error => {console.log(error)})
  }
}
