import { FC } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface InputProps {
  label?: string;
  textInputConfig?: any;
  style?: StyleProp<any>;
  isInvalid?: boolean;
  onChangeText?: (id: string, value: string) => void;
}

const Input: FC<InputProps> = ({
  label,
  style,
  isInvalid,
  onChangeText,
  textInputConfig,
  }) => {
  const inputStyles = [styles.input, isInvalid && styles.inputInvalid];
  const labelStyles = [styles.label, isInvalid && styles.labelInvalid];

  return (
    <View>
      {label && <Text style={labelStyles}>{label}</Text>}
      <View style={[styles.inputContainer, style]}>
        <TextInput style={inputStyles} onChangeText={onChangeText} {...textInputConfig} />
      </View>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  },
  label: {
    color: GlobalStyles.colors.gray500
  },
  labelInvalid: {
    color: GlobalStyles.colors.error500,
  },
  inputInvalid: {
    color: GlobalStyles.colors.error500,
  }
})

