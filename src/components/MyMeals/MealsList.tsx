import { memo } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Meal from './Meal';
import Spinner from '../UI/Spinner';
import Error from '../UI/Error';
import BaseLayout from '../BaseLayout/BaseLayout';
import { IMeal } from '../../types/meals';

interface MealsListProps {
  meals: IMeal[];
  isLoading: boolean;
  error: string;
  showButtonId: string | null;
  toggleHandler: (mealId: string) => void;
  deleteHandler: (mealId: string) => void;
}

const MealsList = memo(({
  meals,
  isLoading,
  toggleHandler,
  deleteHandler,
  showButtonId,
  error
  }: MealsListProps) => {
  if (isLoading) return <Spinner />
  if (error) return <Error message='Error' />

  return (
    <BaseLayout>
      <FlatList
        style={styles.list}
        data={meals}
        renderItem={({ item }) => (
          <Meal
            meal={item}
            deleteHandler={() => deleteHandler(item.id)}
            toggleHandler={() => toggleHandler(item.id)}
            showButton={showButtonId === item.id}
          />
        )}
        keyExtractor={item => item.name}
      />
    </BaseLayout>
  )
})

export default MealsList;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24,
  }
})
