import { useState } from 'react';
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions
} from 'expo-image-picker';
import { Alert } from 'react-native';
import BaseLayout from '../BaseLayout/BaseLayout';
import MealForm from './MealForm';
import { STRINGS } from '../../constants/strings';

const AddMeal = () => {
  const [pickedImage, setPickedImage] = useState<string | undefined>();
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  const verifyPermission = async (): Promise<boolean> => {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(STRINGS.insufficientPermissions, STRINGS.youNeedToGrant)
      return false;
    }

    return true;
  }

  const takePhotoHandler = async (): Promise<void> => {
    const hasPermission = await  verifyPermission();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    })

    setPickedImage(image.assets?.[0].uri);
  }

  return (
    <BaseLayout>
      <MealForm pickedImage={pickedImage} pressHandler={takePhotoHandler} />
    </BaseLayout>
  )
}

export default AddMeal;
