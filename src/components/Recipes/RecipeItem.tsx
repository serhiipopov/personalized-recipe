import { FC } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Recipe } from '../../types/recipe';

interface RecipeProps {
  recipe: Recipe
}

const RecipeItem: FC<RecipeProps> = ({ recipe}) => {
  const {
    source,
    title,
    cuisineType,
    dietLabels,
    healthLabels,
    label,
    image,
    ingredientLines,
    ingredients,
    uri,
    url,
    calories
  } = recipe.recipe;
  return (
    <View style={styles.item}>
      <View  style={{ width: 50, height: 60 }}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <Text>{title}</Text>
      <Text>{source}</Text>
      <Text>{label}</Text>
      <Text>{url}</Text>
      <Text>{uri}</Text>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  item: {
    paddingBottom: 10
  },
  image: {
    width: 100,
    height: 100
  }
})
