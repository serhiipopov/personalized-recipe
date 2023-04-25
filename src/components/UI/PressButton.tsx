import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface PressButtonProps {
  title: string;
  navigateHandler: () => void;
}

const pressStyles = (pressed: boolean) => {
  return (
    [
      {
        backgroundColor: pressed
          ? GlobalStyles.colors.gray300
          : GlobalStyles.colors.gray200,
      },
      styles.wrapperCustom,
    ]
  )
}

const PressButton = ({ navigateHandler, title }: PressButtonProps) => {
  return (
    <View style={styles.wrapperPress}>
      <Pressable
        style={({ pressed }) => pressStyles(pressed)}
        onPress={navigateHandler}
      >
        <Text style={styles.textPress}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default PressButton;

const styles = StyleSheet.create({
  wrapperPress: {
    flex: 2,
  },
  textPress: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  wrapperCustom: {
    borderRadius: 18,
    height: 130,
    justifyContent: 'center',
    opacity: 0.6
  },
})
