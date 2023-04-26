import { StyleSheet, Button, View, Image } from 'react-native';
import Notification from './Notification';
import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';

interface ImagePickerProps {
  nameButton: string;
  pressHandler: () => Promise<void>;
  pickedImage: string | undefined;
}

const ImagePicker = ({
  nameButton,
  pressHandler,
  pickedImage }: ImagePickerProps) => {

  let imagePreview = <Notification notification={STRINGS.noImageTakenYet}/>
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <Button title={nameButton} onPress={pressHandler} />
    </View>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.gray200
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  }
})
