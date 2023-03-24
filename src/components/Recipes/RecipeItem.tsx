import { FC, memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable
} from 'react-native';
import { Recipe } from '../../types/recipe';
import { GlobalStyles } from '../../constants/styles';

interface RecipeProps {
  recipe: Recipe;
  onPress: () => void;
}

const RecipeItem: FC<RecipeProps> = ({ recipe, onPress }) => {
  const { label, image, calories } = recipe.recipe;

  const numCalories = Number(calories).toFixed(1);
  const caloriesText = `Calories ${numCalories}`;

  return (
    <View style={styles.item}>
      <Pressable onPress={onPress}>
        <View>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{label}</Text>
        <Text style={styles.calories}>{caloriesText}</Text>
      </Pressable>
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
