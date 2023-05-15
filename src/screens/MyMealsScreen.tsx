import BaseLayout from '../components/BaseLayout/BaseLayout';
import MealsList from '../components/MyMeals/MealsList';
import Notification from '../components/UI/Notification';
import { useAppSelector } from '../hooks/redux';
import { STRINGS } from '../constants/strings';

const MyMealsScreen = () => {
  const { meals } = useAppSelector(state => state.mealsReducer);
  const isMeals = meals?.length;

  return (
    <BaseLayout>
      {!isMeals && <Notification notification={STRINGS.noMeals} />}
      <MealsList />
    </BaseLayout>
  )
}

export default MyMealsScreen;
