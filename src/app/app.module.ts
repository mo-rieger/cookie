import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecipeService} from "../services/recipe.service";
import {TextToSpeech} from "@ionic-native/text-to-speech";
import {RecipePage} from "../pages/recipe/recipe";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipePage
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
    RecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeService,
    TextToSpeech
  ]
})
export class AppModule {}
