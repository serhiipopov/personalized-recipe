import { StyleSheet, TextInput, View } from 'react-native';
import { useInput } from '../../hooks/useInput';
import { useAppDispatch } from '../../hooks/redux';
import { addIngredient } from '../../store/ingredients/slice';
import { GlobalStyles } from '../../constants/styles';
import IconButton from '../UI/IconButton';

const IngredientInput = () => {
  const { value, onChange, setValue } = useInput('');
  const dispatch = useAppDispatch();


  const addProductHandler = () => {
    const newIngredient = {
      ingredient: value,
      id: Date.now().toString(),
      completed: false,
    }

    dispatch(addIngredient(newIngredient));
    setValue('');
  }

  const isValue = value.length;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder='Add product'
        maxLength={25}
      />
      <IconButton
        name='add-sharp'
        size={42}
        color={GlobalStyles.colors.teal700}
        onPress={addProductHandler}
        disabled={!isValue}
      />
    </View>
  )
}

export default IngredientInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})
