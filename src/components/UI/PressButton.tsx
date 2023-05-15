import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View
} from 'react-native';

interface PressButtonProps {
  title: string;
  pressHandler: () => void;
  style?: StyleProp<any>;
  styleTitle?: StyleProp<any>;
}

const PressButton = ({ pressHandler, title, style, styleTitle }: PressButtonProps) => {
  return (
    <View style={styles.wrapperPress}>
      <Pressable
        style={({ pressed}) => [style, pressed && styles.pressed] }
        onPress={pressHandler}
      >
        <Text style={[styles.textPress, styleTitle]}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default PressButton;

const styles = StyleSheet.create({
  wrapperPress: {
    flex: 1,
  },
  textPress: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.2,
  }
})
