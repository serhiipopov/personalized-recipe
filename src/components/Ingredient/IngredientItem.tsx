import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface IngredientItemProps {
  ingredient: string;
  onDeleteItem: () => void;
}

const IngredientItem: FC<IngredientItemProps> = ({ ingredient, onDeleteItem }) => {
  return (
    <Pressable
      onPress={onDeleteItem}
      android_ripple={{ color: GlobalStyles.colors.cyan100 }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{ingredient}</Text>
      </View>
    </Pressable>
  )
}

export default IngredientItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.cyan700,
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    padding: 8,
    color: GlobalStyles.colors.gray50,
    textTransform: 'uppercase'
  },
  pressedItem: {
    opacity: 0.6,
  }
})
