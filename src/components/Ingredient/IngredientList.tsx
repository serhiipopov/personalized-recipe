import { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeIngredient, toggleIngredient } from '../../store/ingredients/slice';
import IngredientItem from './IngredientItem';
import Spinner from '../UI/Spinner';

const IngredientList: FC = () => {
  const { ingredients, isLoading, error } = useAppSelector(state => state.ingredientsReducer);
  const dispatch = useAppDispatch();

  const deleteIngredientHandler = (id: string) => {
    dispatch(removeIngredient(id))
  }

  const toggleProductHandler = (id: string) => {
    dispatch(toggleIngredient(id))
  }

  if (isLoading) return <Spinner />
  if (error) return <Text>Error</Text>

  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        renderItem={({ item }) =>
          <IngredientItem
            ingredient={item.ingredient}
            onDeleteItem={() => deleteIngredientHandler(item.id)}
            onToggleItem={() => toggleProductHandler(item.id)}
            isCompleted={item.completed}
          />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default IngredientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  }
})
