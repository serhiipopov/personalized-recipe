import { FC } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleProp,
  StyleSheet,
} from 'react-native';

interface InputProps {
  label?: string;
  textInputConfig?: any;
  style?: StyleProp<any>;
}

const Input: FC<InputProps> = ({
  label,
  style,
  textInputConfig,
  }) => {
  const inputStyles = [styles.input];

  return (
    <View style={[styles.inputContainer, style]}>
      { label && <Text>{label}</Text> }
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})

