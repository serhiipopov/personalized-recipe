import { FC } from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import RecipeItem from './RecipeItem';
import { Recipe } from '../../types/recipe';
import { GlobalStyles } from '../../constants/styles';

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList: FC<RecipesListProps> = ({ recipes}) => {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={recipes}
        initialNumToRender={2}
        renderItem={({item}) => <RecipeItem recipe={item} />}
        keyExtractor={item => item.recipe.label}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default RecipesList;

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    flexWrap: 'wrap',
    shadowRadius: 9,
    shadowColor: GlobalStyles.colors.gray900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25
  },
})
