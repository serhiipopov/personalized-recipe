import {FC} from 'react';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import IngredientInput from '../components/Ingredient/IngredientInput';
import IngredientList from '../components/Ingredient/IngredientList';
import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const BuyListScreen: FC = () => {
  return (
    <View style={styles.container}>
      <IngredientInput/>
      <IngredientList/>
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
