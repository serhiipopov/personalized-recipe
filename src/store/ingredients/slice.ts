import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredient, IngredientsState } from '../../types/ingredients';

export const initialState: IngredientsState = {
  ingredients: [],
  isLoading: false,
  error: '',
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<Ingredient>) {
      state.ingredients = [...state.ingredients, { ...action.payload }]
    },
    removeIngredient(state, action: PayloadAction<string>) {
      state.ingredients = state.ingredients.filter(ingredient => ingredient.id !== action.payload)
    },
  },
})

export const {
  addIngredient,
  removeIngredient,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

