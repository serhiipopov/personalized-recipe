export interface IRecipe {
  calories: string
  label: string;
  image: string;
  url: string;
  uri: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredientLines: string[];
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
