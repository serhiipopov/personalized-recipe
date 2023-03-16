import { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RecipeItem from './RecipeItem';
import { Recipe } from '../../types/recipe';

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList: FC<RecipesListProps> = ({ recipes}) => {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeItem recipe={item} /> }
        keyExtractor={item => item.recipe.label}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipesList;

const styles = StyleSheet.create({
  listWrapper: {
  }
})
