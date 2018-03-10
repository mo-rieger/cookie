import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecipeService} from "../../services/recipe.service";
import {RecipePage} from "../recipe/recipe";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController, private recipeService: RecipeService) {
  }

  getRecipe(recipeUrl: string) {
    this.recipeService.getRecipe(recipeUrl).subscribe(
      data => {
        this.navCtrl.push(RecipePage, {
          recipe: data
        })},
      error => {console.log(error)})
  }
}
