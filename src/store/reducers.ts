import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from '../store/ingredients/slice';
import recipesReducer from '../store/recipe/slice';
import authReducer from '../store/auth/slice';
import mealsReducer from '../store/meals/slice';
import profileReducer from '../store/account/slice';

const rootReducer = combineReducers({
  ingredientsReducer,
  recipesReducer,
  authReducer,
  mealsReducer,
  profileReducer,
})

export default rootReducer;
