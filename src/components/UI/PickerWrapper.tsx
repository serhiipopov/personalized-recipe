import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import IconButton from './IconButton';
import Notification from './Notification';
import { GlobalStyles } from '../../constants/styles';

interface PickerWrapperProps {
  image: string | undefined;
  pressHandler: () => Promise<void>;
  pressHandlerSecond?: () => void;
  notification: string;
  icon: string;
  iconSecond?: string;
  isIconBtnSecond?: boolean;
}

const PickerWrapper = ({
  image,
  pressHandler,
  pressHandlerSecond,
  notification,
  icon,
  iconSecond,
  isIconBtnSecond
  }: PickerWrapperProps) => {

  let imagePreview = <Notification notification={notification} />
  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.wrapperIcons}>
        <IconButton
          name={icon}
          size={32}
          color={GlobalStyles.colors.orange500}
          onPress={pressHandler}
        />
        {isIconBtnSecond && (
          <IconButton
            name={iconSecond || ''}
            size={32}
            color={GlobalStyles.colors.orange500}
            onPress={pressHandlerSecond}
          />
        )}
      </View>
    </View>
  )
}

export default memo(PickerWrapper);

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
  },
  wrapperIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
