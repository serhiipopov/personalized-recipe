import { StyleSheet, View, Image } from 'react-native';
import Notification from './Notification';
import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';
import IconButton from './IconButton';

interface ImagePickerProps {
  pressHandler: () => Promise<void>;
  pickedImage: string | undefined;
}

const ImagePicker = ({ pressHandler, pickedImage }: ImagePickerProps) => {

  let imagePreview = <Notification notification={STRINGS.noImageTakenYet}/>
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <IconButton
        name='camera-outline'
        size={32}
        color={GlobalStyles.colors.orange500}
        onPress={pressHandler}
      />
    </View>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.gray200,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  }
})
