import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMeal, Location, MealsState} from '../../types/meals';

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

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeal(state, action: PayloadAction<IMeal>) {
      state.meals = [...state.meals, { ...action.payload }]
    },
    resetMeal(state) {
      state.meal = initialState.meal;
    },
    removeMeal(state, action: PayloadAction<string>) {
      state.meals = state.meals.filter((meal) => meal.id !== action.payload);
    },
    updateMeal(state, action: PayloadAction<IMeal>) {
      const index = state.meals.findIndex((meal) => meal.id === action.payload.id);
      if (index !== -1) {
        state.meals[index] = action.payload;
      }
    },
    setPickedImage: (state, action: PayloadAction<string>) => {
      state.meal.pickedImage = action.payload;
    },
    setPickedLocation: (state, action: PayloadAction<Location>) => {
      state.meal.pickedLocation = action.payload;
    }
  }
});

export const {
  addMeal,
  setPickedLocation,
  setPickedImage,
  resetMeal
} = mealsSlice.actions;

export default mealsSlice.reducer;
