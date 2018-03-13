import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Recipe} from "../../models/recipe.model";
import {TextToSpeech} from "@ionic-native/text-to-speech";
import {SpeechRecognition} from "@ionic-native/speech-recognition";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})

export class RecipePage implements OnInit{
  recipe: Recipe
  step: number = 0;

  constructor( public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech, private speechRecognition: SpeechRecognition) {
    this.recipe = this.navParams.get('recipe')
  }

  ngOnInit() {
   // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))

  // Start the recognition process
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => console.log(matches),
        (onerror) => console.log('error:', onerror)
      )
  }

  startReading(content: string[]){
    this.tts.speak({
      text: content[this.step],
      rate: 0.75
    }).then(() => {
        this.step = this.step + 1
      })
      .catch((reason: any) => console.log(reason));
  }
}
