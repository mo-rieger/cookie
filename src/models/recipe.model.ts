export interface Recipe {
  name: string
  url: string
  yield: string
  ingredients: string[]
  instructions: string[]
  totalTime: object
  prepTime: object
  cookTime: object
  copyrighted?: object
}
