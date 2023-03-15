import {FC, useEffect} from 'react';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import IngredientInput from '../components/Ingredient/IngredientInput';
import IngredientList from '../components/Ingredient/IngredientList';
import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toggleIngredient} from '../store/ingredients/slice';
import {useAppDispatch, useAppSelector} from '../hooks/redux';

const BuyListScreen: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCheckboxValue = async () => {
      const value = await AsyncStorage.getItem('checkboxValue');
    };
    getCheckboxValue();
  }, []);

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
