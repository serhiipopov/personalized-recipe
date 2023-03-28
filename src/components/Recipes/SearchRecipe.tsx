import { FC } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View
} from 'react-native';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../../constants/styles';
import Input from '../UI/Input';

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
      <Input
        textInputConfig={{
          value: recipe,
          onChange: onChange,
          placeholder: 'Search recipe...',
        }}
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
  }
})
