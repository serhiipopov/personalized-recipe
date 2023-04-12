import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import IngredientItem from './IngredientItem';
import Spinner from '../UI/Spinner';

interface IngredientListProps {
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
}

const IngredientList = ({ onDeleteItem, onToggleItem }: IngredientListProps) => {
  const { ingredients, isLoading, error } = useAppSelector(state => state.ingredientsReducer);

  if (isLoading) return <Spinner />
  if (error) return <Text>Error</Text>

  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        renderItem={({ item }) =>
          <IngredientItem
            ingredient={item.ingredient}
            onDeleteItem={() => onDeleteItem(item.id)}
            onToggleItem={() => onToggleItem(item.id)}
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
