import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAPI } from '../../api/api';
import { IMeal, Location, MealsState } from '../../types/meals';

const initialState: MealsState = {
  meal: {
    id: '',
    name: '',
    pickedImage: '',
    pickedLocation: {},
  },
  meals: [],
  isLoading: false,
  error: '',
}

export const addMealAsync = createAsyncThunk(
  'meal/addMealAsync',
  async (meal: IMeal, { rejectWithValue }) => {
    try {
      return await FirebaseAPI.addMeal(meal);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteMealAsync = createAsyncThunk(
  'delete/deleteMealAsync',
  async (mealId: string, {  rejectWithValue }) => {
    try {
      return await FirebaseAPI.removeMeal(mealId);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchAllMealsAsync = createAsyncThunk(
  'meals/fetchAllMealsAsync',
  async (_, { rejectWithValue }) => {
    try {
      const response = await FirebaseAPI.getAllMeals();
      if (response === null) return [];
      const mealKeys = Object.keys(response);

      return mealKeys.map(key => ({ ...response[key], id: key }));

    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    resetMeal(state) {
      state.meal = initialState.meal
    },
    updateMeal(state, action: PayloadAction<IMeal>) {
      const index = state.meals.findIndex((meal) => meal.id === action.payload.id);
      if (index !== -1) {
        state.meals[index] = action.payload;
      }
    },
    setInput(state, action: PayloadAction<string>) {
      state.meal.name = action.payload
    },
    setPickedImage: (state, action: PayloadAction<string>) => {
      state.meal.pickedImage = action.payload;
    },
    setPickedLocation: (state, action: PayloadAction<Location>) => {
      state.meal.pickedLocation = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMealAsync.fulfilled.type, (state, action: PayloadAction<IMeal>) => {
        state.meals = [...state.meals, { ...action.payload }];
      })
    builder
      .addCase(fetchAllMealsAsync.fulfilled.type, (state, action: PayloadAction<IMeal[]>) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = '';
    })
      .addCase(fetchAllMealsAsync.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllMealsAsync.pending.type, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
    builder
      .addCase(deleteMealAsync.fulfilled, (state, action: PayloadAction<string>) => {
        const mealId = action.payload;
        state.meals = state.meals.filter((meal) => meal.id !== mealId);
        state.error = '';
        state.isLoading = false;
      });
  }
})

export const {
  setPickedLocation,
  setPickedImage,
  setInput,
  resetMeal,
} = mealsSlice.actions;

export default mealsSlice.reducer;
