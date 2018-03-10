import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from "../models/recipe.model";
import {Observable} from "rxjs/Observable";

const API_ENDPOINT: string  = 'https://choppingboard.recipes/api/v0/recipe'
const API_KEY: string = '6e8a4295f50b0f8f860037629c80ae84'

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipe(recipeUrl: string): Observable<Recipe> {
    let apiPath = API_ENDPOINT + '?key=' + API_KEY + '&q=' + recipeUrl
    return this.http.get<Recipe>(apiPath)
  }
}
