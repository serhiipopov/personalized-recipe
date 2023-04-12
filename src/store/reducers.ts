import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from '../store/ingredients/slice';
import recipesReducer from '../store/recipe/slice';
import authReducer from '../store/auth/slice';

const rootReducer = combineReducers({
  ingredientsReducer,
  recipesReducer,
  authReducer
})

export default rootReducer;
