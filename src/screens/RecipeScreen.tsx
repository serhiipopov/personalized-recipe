import { FC, useState } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRecipesAsync } from '../store/recipe/slice';
import { useDebounce } from '../hooks/useDebounce';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import RecipesList from '../components/Recipes/RecipesList';
import SearchRecipe from '../components/Recipes/SearchRecipe';
import Spinner from '../components/UI/Spinner';

const RecipeScreen: FC = () => {
  const [searchRecipe, setSearchRecipe] = useState<string>('');
  const { recipes, error, isLoading } = useAppSelector(state => state.recipesReducer);
  const dispatch = useAppDispatch();

  const debouncedSubmit = useDebounce(async () => {
    await dispatch(fetchRecipesAsync(searchRecipe));
  }, 1500);

  const onSearchRecipeHandler = async(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setSearchRecipe(value);
    await debouncedSubmit();
  }

  if (isLoading) return <Spinner />
  if (error) return <Text>Error</Text>

  return (
    <BaseLayout>
      <SearchRecipe
        recipe={searchRecipe}
        onChange={onSearchRecipeHandler}
      />
      <RecipesList recipes={recipes} />
    </BaseLayout>
  )
}

export default RecipeScreen;
