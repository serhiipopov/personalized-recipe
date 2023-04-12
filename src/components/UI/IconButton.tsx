import { StyleSheet, Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconButtonProps {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
  disabled?: boolean;
}

const IconButton = ({
  name,
  color,
  size,
  onPress,
  disabled,
  }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      disabled={disabled}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.4
  }
})
