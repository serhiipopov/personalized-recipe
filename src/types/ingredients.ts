export interface Ingredient {
  id: string;
  ingredient: string;
}

export interface IngredientsState {
  ingredients: Ingredient[];
  isLoading: boolean;
  error: string;
}
