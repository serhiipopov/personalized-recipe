import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { useInput } from '../../hooks/useInput';
import ImagePicker from '../UI/ImagePicker';
import LocationPicker from './LocationPicker';
import { GlobalStyles } from '../../constants/styles';

interface MealFormProps {
  pressHandler: () => Promise<void>;
  locationHandler: () => Promise<void>;
  mapHandler: () => Promise<void>;
  pickedImage: string | undefined;
}

const MealForm = ({ pressHandler, pickedImage, mapHandler, locationHandler }: MealFormProps) => {
  const { value, onChange } = useInput('');

  return (
   <ScrollView style={styles.container}>
     <TextInput
       style={styles.input}
       value={value}
       onChangeText={onChange}
       placeholder='Add my meal'
       maxLength={25}
     />
     <ImagePicker
       pickedImage={pickedImage}
       pressHandler={pressHandler}
     />
     <LocationPicker
       mapHandler={mapHandler}
       locationHandler={locationHandler}
     />
   </ScrollView>
  )
}

export default MealForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  input: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
    fontSize: 18,
  }
})
