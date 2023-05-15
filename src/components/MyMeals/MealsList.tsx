import { StyleSheet, FlatList } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import Meal from './Meal';
import Spinner from '../UI/Spinner';
import Error from '../UI/Error';
import BaseLayout from '../BaseLayout/BaseLayout';

const MealsList = () => {
  const { meals, error, isLoading } = useAppSelector(state => state.mealsReducer);

  if (isLoading) return <Spinner />
  if (error) return <Error message='Error' />

  return (
    <BaseLayout>
      <FlatList
        style={styles.list}
        data={meals}
        renderItem={ ({ item }) => <Meal meal={item} /> }
        keyExtractor={item => item.id}
      />
    </BaseLayout>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24,
  }
})
