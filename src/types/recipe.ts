export interface IRecipe {
  calories: string
  label: string;
  image: string;
  url: string;
  uri: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  cuisineType: string[];

}

export interface Recipe {
  recipe: IRecipe
}

export interface RecipesState {
  recipes: Recipe[];
  isLoading: boolean;
  error: string;
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: string
}
