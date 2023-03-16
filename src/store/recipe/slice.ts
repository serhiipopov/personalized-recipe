import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeAPI } from '../../api/api';
import { Recipe, RecipesState } from '../../types/recipe';

const initialState: RecipesState = {
  recipes: [],
  isLoading: false,
  error: '',
}

export const fetchRecipesAsync = createAsyncThunk(
  'recipesServices/fetchRecipeAsync',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await RecipeAPI.getRecipe(query)
        .then(response => response.data.hits)

      return response

    } catch (error) {
      return rejectWithValue('Failed to load recipes!')
    }
  }
)

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(fetchRecipesAsync.fulfilled.type, (state, action: PayloadAction<Recipe[]>) => {
        state.isLoading = false
        state.error = ''
        state.recipes = action.payload
      })
      .addCase(fetchRecipesAsync.pending.type, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRecipesAsync.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default recipeSlice.reducer;
