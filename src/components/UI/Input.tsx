import {FC, ReactChildren} from 'react';
import { View, Text, TextInput, StyleProp, StyleSheet } from 'react-native';
import {GlobalStyles} from '../../constants/styles';

interface InputProps {
  label: string;
  textInputConfig?: StyleProp<any>;
  children?: React.ReactNode
}

const Input: FC<InputProps> = ({ label, textInputConfig, children }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput  style={styles.input} {...textInputConfig} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})

