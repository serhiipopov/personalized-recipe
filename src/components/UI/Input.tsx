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
  error?: string;
}

const Input = ({
  label,
  style,
  isInvalid,
  onChangeText,
  textInputConfig,
  error
  }: InputProps) => {
  const inputStyles = [styles.input, isInvalid && styles.inputInvalid];
  const labelStyles = [styles.label, isInvalid && styles.labelInvalid];
  const inputContainerStyles = [styles.inputContainer, isInvalid && styles.inputContainerInvalid];

  return (
    <View>
      {label && <Text style={labelStyles}>{label}</Text>}
      <View style={[inputContainerStyles, style]}>
        <TextInput style={inputStyles} onChangeText={onChangeText} {...textInputConfig} />
      </View>
      {error && <Text style={styles.labelInvalid}>{error}</Text>}
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputContainerInvalid: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.error500
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
