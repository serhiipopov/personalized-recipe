import { FC } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { removeIngredient, toggleIngredient } from '../store/ingredients/slice';
import { StyleSheet, View } from 'react-native';
import IngredientInput from '../components/Ingredient/IngredientInput';
import IngredientList from '../components/Ingredient/IngredientList';
import { GlobalStyles } from '../constants/styles';

const BuyListScreen: FC = () => {
  const dispatch = useAppDispatch();

  const deleteIngredientHandler = (id: string) => {
    dispatch(removeIngredient(id))
  }

  const toggleProductHandler = (id: string) => {
    dispatch(toggleIngredient(id))
  }

  return (
    <View style={styles.container}>
      <IngredientInput />
      <IngredientList
        onDeleteItem={deleteIngredientHandler}
        onToggleItem={toggleProductHandler}
      />
    </View>
  )
}

export default BuyListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: GlobalStyles.colors.gray50
  }
})
