import { useCallback, useEffect, useState } from 'react';
import { deleteMealAsync, fetchAllMealsAsync } from '../store/meals/slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import MealsList from '../components/MyMeals/MealsList';
import Notification from '../components/UI/Notification';
import { STRINGS } from '../constants/strings';

const MyMealsScreen = () => {
  const { meals, error, isLoading } = useAppSelector(state => state.mealsReducer);
  const [showButtonId, setShowButtonId] = useState<string | null>(null);
  const isMeals = meals?.length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMealsAsync())
  },[]);

  const toggleShowButtonHandler = useCallback((mealId: string) => {
    setShowButtonId(prevId => (prevId === mealId ? null : mealId));
  },[showButtonId]);

  const deleteMealHandler = useCallback((mealId: string) => {
    dispatch(deleteMealAsync(mealId))
      .then(() => {
        dispatch(fetchAllMealsAsync())
      })
  },[dispatch, fetchAllMealsAsync])

  return (
    <BaseLayout>
      {!isMeals && <Notification notification={STRINGS.noMeals} />}
      <MealsList
        meals={meals}
        showButtonId={showButtonId}
        error={error}
        isLoading={isLoading}
        toggleHandler={toggleShowButtonHandler}
        deleteHandler={deleteMealHandler}
      />
    </BaseLayout>
  )
}

export default MyMealsScreen;
