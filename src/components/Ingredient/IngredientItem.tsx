import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface IngredientItemProps {
  ingredient: string;
  onDeleteItem: () => void;
  onToggleItem: () => void;
  isCompleted: boolean;
}

const IngredientItem: FC<IngredientItemProps> = ({
  ingredient,
  onDeleteItem,
  onToggleItem,
  isCompleted,
  }) => {
  return (
    <View style={styles.container}>

      <View style={styles.checkbox}>
        <BouncyCheckbox
          size={30}
          fillColor={GlobalStyles.colors.teal300}
          onPress={onToggleItem}
          isChecked={isCompleted}
          innerIconStyle={{ borderRadius: 12 }}
          iconStyle={{ borderRadius: 12 }}
          bounceEffectIn={0.6}
          bounceEffectOut={1}
        />
      </View>

      <Pressable
        onPress={onDeleteItem}
        android_ripple={{color: GlobalStyles.colors.cyan100}}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.wrapperText}>
          <Text style={styles.text}>{ingredient}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default IngredientItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperText: {
    minWidth: '70%',
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.5,
    padding: 10,
    color: GlobalStyles.colors.teal700,
    textTransform: 'uppercase',
  },
  pressedItem: {
    opacity: 0.3,
  },
  checkbox: {
    paddingLeft: 6
  }
})
