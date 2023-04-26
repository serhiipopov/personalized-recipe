import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { useInput } from '../../hooks/useInput';
import PickerWrapper from '../UI/PickerWrapper';
import { GlobalStyles } from '../../constants/styles';
import { STRINGS } from '../../constants/strings';

interface MealFormProps {
  pressHandler: () => Promise<void>;
  locationHandler: () => Promise<void>;
  mapHandler: () => Promise<void>;
  pickedImage: string | undefined;
  mapUrl: string;
}

const MealForm = ({
  pressHandler,
  pickedImage,
  mapHandler,
  locationHandler,
  mapUrl
  }: MealFormProps) => {
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
     <PickerWrapper
       image={pickedImage}
       pressHandler={pressHandler}
       icon='camera-outline'
       notification={STRINGS.noImageTakenYet}
     />
     <PickerWrapper
       image={mapUrl}
       pressHandler={locationHandler}
       icon='location-outline'
       iconSecond='map-outline'
       isIconBtnSecond={true}
       notification={STRINGS.noLocationTakenYet}
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
