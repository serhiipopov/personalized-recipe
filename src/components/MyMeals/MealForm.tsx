import { ScrollView, StyleSheet, TextInput } from 'react-native';
import PickerWrapper from '../UI/PickerWrapper';
import PressButton from '../UI/PressButton';
import { GlobalStyles } from '../../constants/styles';
import { STRINGS } from '../../constants/strings';

interface MealFormProps {
  pressHandler: () => Promise<void>;
  locationHandler: () => Promise<void>;
  mapHandler: () => void;
  saveHandler: () => void;
  pickedImage: string | undefined;
  mapUrl: string;
  onChange: (value: string) => void;
  value: string;
}

const MealForm = ({
  pressHandler,
  pickedImage,
  mapHandler,
  locationHandler,
  mapUrl,
  saveHandler,
  value,
  onChange,
  }: MealFormProps) => {
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
       pressHandlerSecond={mapHandler}
       icon='location-outline'
       iconSecond='map-outline'
       isIconBtnSecond={true}
       notification={STRINGS.noLocationTakenYet}
     />
     <PressButton
       title={STRINGS.saveMeal}
       style={styles.saveButton}
       pressHandler={saveHandler}
       styleTitle={styles.buttonTitle}
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
  },
  saveButton: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.orange500,
    paddingHorizontal: 16,
    paddingVertical: 16,
    margin: 6,
  },
  buttonTitle: {
    color: GlobalStyles.colors.orange500,
  }
})
