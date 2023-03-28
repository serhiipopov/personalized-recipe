import { FC, useMemo } from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Pressable,
  ScrollView
} from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import DetailItemsWrapper from './DetailItemsWrapper';
import { RecipeDetailsScreenRouteProp } from '../../types/route';
import { GlobalStyles } from '../../constants/styles';

interface RecipeDetailsProps {
  route: RecipeDetailsScreenRouteProp;
}

// todo fix id to recipe
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
    url,
    ingredientLines,
    label,
    dietLabels,
    healthLabels,
    cuisineType,
  } = selectedRecipe!.recipe;

  const urlHandler = () => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.label}>{label}</Text>
        <Pressable
          onPress={urlHandler}
          style={({ pressed }) => pressed && styles.pressUrl}>
          <Text style={styles.url}>Recipe</Text>
        </Pressable>

        { dietLabels.length ? <DetailItemsWrapper label='Diet:' details={dietLabels} /> : null }
        { healthLabels.length ? <DetailItemsWrapper label='Health:' details={healthLabels} /> : null }
        { cuisineType.length  ? <DetailItemsWrapper label='Cuisine:' details={cuisineType} /> : null }
        { ingredientLines.length ? <DetailItemsWrapper label='Ingredients:' details={ingredientLines} /> : null }

      </ScrollView>
    </View>
  )
}

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  pressUrl: {
    opacity: 0.5,
    justifyContent: 'center'
  },
  url: {
    width: 80,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.teal500,
    borderWidth: 1,
    color: GlobalStyles.colors.cyan700,
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  },
  label: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingBottom: 6,
  },
})
