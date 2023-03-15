export interface Ingredient {
  id: string;
  ingredient: string;
  completed: boolean;
}

export interface IngredientsState {
  ingredients: Ingredient[];
  isLoading: boolean;
  error: string;
}
