import { FC } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput, TextInputChangeEventData,
  View
} from 'react-native';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../../constants/styles';

interface SearchRecipeProps {
  recipe: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const SearchRecipe: FC<SearchRecipeProps> = ({ recipe, onChange }) => {
  return (
    <View style={styles.container}>
      <IconButton
        name='search'
        size={32}
        color={GlobalStyles.colors.gray300}
      />
      <TextInput
        value={recipe}
        onChange={onChange}
        style={styles.input}
        placeholder='Search recipe...'
      />
    </View>
  )
}

export default SearchRecipe;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    marginVertical: 32,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})
