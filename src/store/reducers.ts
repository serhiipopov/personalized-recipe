import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from '../store/ingredients/slice';
import recipesReducer from '../store/recipe/slice';

const rootReducer = combineReducers({
  ingredientsReducer,
  recipesReducer
})

export default rootReducer;
