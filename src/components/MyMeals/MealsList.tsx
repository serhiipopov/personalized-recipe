import { FlatList, View } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import Meal from './Meal';
import Spinner from '../UI/Spinner';
import Error from '../UI/Error';

const MealsList = () => {
  const { meals, error, isLoading } = useAppSelector(state => state.mealsReducer);

  if (isLoading) return <Spinner />
  if (error) return <Error message='Error' />

  return (
    <View>
      <FlatList
        data={meals}
        renderItem={({ item }) =>
          <Meal meal={item} />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MealsList;
