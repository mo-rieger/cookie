import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from "../models/recipe.model";

@Injectable()
export class RecipeService {
  readonly API_ENDPOINT  = 'https://choppingboard.recipes/api/v0/recipe'
  readonly API_KEY = '6e8a4295f50b0f8f860037629c80ae84'

  constructor(private http: HttpClient) { }

  getRecipe(recipeUrl: string) {
    let apiPath = this.API_ENDPOINT + '?key=' + this.API_KEY + '&q=' + recipeUrl
    return this.http.get<Recipe>(apiPath)
  }
}
