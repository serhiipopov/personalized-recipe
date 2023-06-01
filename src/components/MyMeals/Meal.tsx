import { memo, useMemo } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View
} from 'react-native';
import IconButton from '../UI/IconButton';
import { IMeal } from '../../types/meals';
import { GlobalStyles } from '../../constants/styles';

interface MealProps {
  meal: IMeal;
  toggleHandler: () => void;
  deleteHandler: () => void;
  showButton: boolean;
}

const Meal = memo(({
  meal,
  toggleHandler,
  deleteHandler,
  showButton
  }: MealProps) => {
  const { pickedImage, name, pickedLocation } = meal;
  const isButtonShown = useMemo(() => showButton, [showButton]);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleHandler}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.wrapperImg}>
          <Image
            source={{ uri: pickedImage || undefined }}
            style={[styles.image, isButtonShown && styles.focusImage]}
          />
        </View>
        <Text style={styles.address}>{pickedLocation?.address}</Text>
        {showButton && (
          <Pressable style={styles.removeIcon}>
            <IconButton
              onPress={deleteHandler}
              name='archive'
              size={42}
              color={GlobalStyles.colors.error500}
            />
          </Pressable>
        )}
      </Pressable>
    </View>
  )
})

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  focusImage: {
    opacity: 0.4,
  },
  address: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  removeIcon: {
    position: 'absolute',
    bottom: 8,
    right: 5,
  }
})
