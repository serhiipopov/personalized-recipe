import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View
} from 'react-native';
import { IMeal } from '../../types/meals';

interface MealProps {
  meal: IMeal;
  onPress?: () => void;
}

const Meal = ({ meal, onPress }: MealProps) => {
  const { img, title } = meal;

  return (
    <View>
      <Pressable onPress={onPress}  style={({ pressed }) => pressed && styles.pressedItem}>
        <View>
          <Image source={{ uri: img }} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
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
  pressedItem: {
    opacity: 0.5
  }
})
