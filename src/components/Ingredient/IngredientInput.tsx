import { FC, useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useAppDispatch } from '../../hooks/redux';
import { addIngredient } from '../../store/ingredients/slice';
import { GlobalStyles } from '../../constants/styles';

const IngredientInput: FC = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const productInputHandler = (enteredProduct: string) => {
    setInput(enteredProduct);
  }

  const addProductHandler = () => {
    const newIngredient = {
      ingredient: input,
      id: Date.now().toString(),
      completed: false,
    }

    dispatch(addIngredient(newIngredient));
    setInput('');
  }

  const countInput = input.length;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={productInputHandler}
        placeholder='Add product'
        maxLength={25}
      />
      <Button
        title='Add'
        color={GlobalStyles.colors.teal700}
        onPress={addProductHandler}
        disabled={!countInput}
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})
