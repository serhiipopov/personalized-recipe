import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from '../store/ingredients/slice';

const rootReducer = combineReducers({
  ingredientsReducer
})

export default rootReducer;
