import { StyleSheet, TextInput, View } from 'react-native';
import { useInput } from '../../hooks/useInput';
import ImagePicker from '../UI/ImagePicker';

import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';

interface MealFormProps {
  pressHandler: () => Promise<void>;
  pickedImage: string | undefined;
}

const MealForm = ({ pressHandler, pickedImage }: MealFormProps) => {
  const { value, onChange } = useInput('');

  return (
   <View style={styles.container}>
     <TextInput
       style={styles.input}
       value={value}
       onChangeText={onChange}
       placeholder='Add my meal'
       maxLength={25}
     />
     <ImagePicker
       pickedImage={pickedImage}
       nameButton={STRINGS.takePhoto}
       pressHandler={pressHandler}
     />
   </View>
  )
}

export default MealForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '20%',
  },
  input: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})
