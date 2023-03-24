import { FC } from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import RecipeItem from './RecipeItem';

import { StackNavigation } from '../../types/route';
import { Recipe } from '../../types/recipe';
import { GlobalStyles } from '../../constants/styles';
import { Screen } from '../../constants/screen';

interface RecipesListProps {
  recipes: Recipe[];
  navigation: StackNavigation;
}

const RecipesList: FC<RecipesListProps> = ({ recipes, navigation }) => {
  const renderRecipeItem = (recipeData: Recipe, ) => {
    const pressHandler = () => {
      navigation.navigate(Screen.RecipeDetails, { uri: recipeData.recipe.uri } )
    }

    return (
      <RecipeItem
        recipe={recipeData}
        onPress={pressHandler}
      />
    )
  }

  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.recipe.uri}
        renderItem={({ item }) => renderRecipeItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default RecipesList;

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    shadowRadius: 9,
    shadowColor: GlobalStyles.colors.gray900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25
  },
})
