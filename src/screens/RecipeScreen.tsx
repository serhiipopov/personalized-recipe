import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRecipesAsync } from '../store/recipe/slice';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import RecipesList from '../components/Recipes/RecipesList';

const RecipeScreen: FC = () => {
  const [query, setQuery] = useState('chicken');
  const dispatch = useAppDispatch();
  const { recipes } = useAppSelector(state => state.recipesReducer);

  useEffect(() => {
    dispatch(fetchRecipesAsync(query))
  },[])

  return (
    <BaseLayout>
      <RecipesList recipes={recipes} />
    </BaseLayout>
  )
}

export default RecipeScreen;
