import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Recipe} from "../../models/recipe.model";
import {TextToSpeech} from "@ionic-native/text-to-speech";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {
  recipe: Recipe
  constructor( public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
    this.recipe = this.navParams.get('recipe')
  }
  startReading(content: string[]){
    console.log('should start reading')
    this.tts.speak('Hi I am Mr. Cookie!')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
