import { FC, useMemo } from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { RecipeDetailsScreenRouteProp } from '../../types/route';
import { useAppSelector } from '../../hooks/redux';
import { GlobalStyles } from '../../constants/styles';

interface RecipeDetailsProps {
  route: RecipeDetailsScreenRouteProp;
}

// export const extractIdFromUri = (uri: string) => {
//   return uri.split('#recipe_').pop()
// }

const RecipeDetails: FC<RecipeDetailsProps> = ({ route }) => {
  const { recipes } = useAppSelector(state => state.recipesReducer)
  const recipeId = route.params?.uri;
  const selectedRecipe = useMemo(() => {
      return recipes.find(recipe => recipe.recipe.uri === recipeId)
    }, [recipeId]);

  const {
    ingredients,
    url,
    ingredientLines,
    label,
    dietLabels,
    healthLabels,
    cuisineType,
  } = selectedRecipe!.recipe;

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text
        style={{color: GlobalStyles.colors.cyan700}}
        onPress={() => Linking.openURL(url)}
      >
        {url}
      </Text>

      <View>
      {ingredientLines.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))}
      </View>

      <View>
        {dietLabels.map((label, index) => (
        <Text key={index}>{label}</Text>
      ))}
      </View>

      <View>
        {healthLabels.map((label, index) => (
        <Text key={index}>{label}</Text>
      ))}
      </View>

      <View>
        {cuisineType.map((label, index) => (
          <Text key={index}>{label}</Text>
        ))}
      </View>


      <View>
        {ingredients.map((ingredient, index) => (
          <View key={index}>
            <Text>{ingredient.text}</Text>
            <Text>{ingredient.measure}</Text>
            <Text>{ingredient.weight}</Text>
            <Text>{ingredient.measure}</Text>
            <Text>{ingredient.quantity}</Text>
          </View>

        ))}
      </View>

    </View>
  )
}

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  }
})
