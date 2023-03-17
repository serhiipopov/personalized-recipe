import { FC, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Recipe } from '../../types/recipe';
import { Linking } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface RecipeProps {
  recipe: Recipe
}

const RecipeItem: FC<RecipeProps> = ({recipe}) => {
  const {
    source,
    cuisineType,
    dietLabels,
    healthLabels,
    label,
    image,
    ingredientLines,
    ingredients,
    url,
    calories
  } = recipe.recipe;
  const numCalories = Number(calories).toFixed(2);
  const caloriesText = `Calories ${numCalories}`;

  return (
    <View style={styles.item}>
      <View>
        <Image source={{uri: image}} style={styles.image}/>
      </View>
      <Text style={styles.title}>{label}</Text>
      {/*<Text*/}
      {/*  style={{color: GlobalStyles.colors.cyan700}}*/}
      {/*  onPress={() => Linking.openURL(url)}*/}
      {/*>*/}
      {/*  {url}*/}
      {/*</Text>*/}
      <Text style={styles.calories}>{caloriesText}</Text>
    </View>
  )
}

export default memo(RecipeItem);

const styles = StyleSheet.create({
  item: {
    paddingBottom: 10,
    borderRadius: 18,
    backgroundColor: GlobalStyles.colors.gray50,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 26,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  calories: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: GlobalStyles.colors.gray500,
  }
})
