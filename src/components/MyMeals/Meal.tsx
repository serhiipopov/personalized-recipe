import { memo } from 'react';
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
  const { pickedImage, name, pickedLocation } = meal;

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}  style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.wrapperImg}>
          <Image source={{ uri: pickedImage || undefined  }} style={styles.image} />
        </View>
        <Text style={styles.address}>{pickedLocation?.address}</Text>
      </Pressable>
    </View>
  )
}

export default memo(Meal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  wrapperImg: {
    marginVertical: 6,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },
  pressedItem: {
    opacity: 0.5
  },
  address: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase'
  }
})
