export interface Recipe {
  name: string
  url: string
  yield: string
  ingredients: string[]
  instructions: string[]
  totalTime: {
    iso: string
    en: string
  }
  prepTime: {
    iso: string,
    en: string
  }
  cookTime: {
    iso: string,
    en: string
  }
  copyrighted?: {
    image: string
    description: string
  }
}
