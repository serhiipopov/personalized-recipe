import { useState } from 'react';
import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';
import { verifyPermission } from '../../utils/verifyPermission';
import BaseLayout from '../BaseLayout/BaseLayout';
import MealForm from './MealForm';
import { STRINGS } from '../../constants/strings';

const AddMeal = () => {
  const [pickedImage, setPickedImage] = useState<string | undefined>();
  const [cameraPermissionInformation, requestPermissionCamera] = useCameraPermissions();
  const [locationPermissionInformation, requestPermissionLocation] = useForegroundPermissions();

  const takePhotoHandler = async (): Promise<void> => {
    const hasPermission = await verifyPermission(
      cameraPermissionInformation,
      requestPermissionCamera,
      STRINGS.youNeedToGrantCamera
    );
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    })

    setPickedImage(image.assets?.[0].uri);
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission(
      locationPermissionInformation,
      requestPermissionLocation,
      STRINGS.youNeedToGrantLocation
    );
    if (!hasPermission) return;

    const location = await getCurrentPositionAsync()
    console.log(location)
  }
  const pickOnMapHandler = async () => {
  }

  return (
    <BaseLayout>
      <MealForm
        pickedImage={pickedImage}
        pressHandler={takePhotoHandler}
        locationHandler={getLocationHandler}
        mapHandler={pickOnMapHandler}
      />
    </BaseLayout>
  )
}

export default AddMeal;
