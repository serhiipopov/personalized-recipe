import { useState } from 'react';
import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';
import { verifyPermission } from '../../utils/verifyPermission';
import { getMapPreview } from '../../utils/location';

import BaseLayout from '../BaseLayout/BaseLayout';
import MealForm from './MealForm';
import { STRINGS } from '../../constants/strings';

const AddMeal = () => {
  const [pickedImage, setPickedImage] = useState<string | undefined>();
  const [pickedLocation, setPickedLocation] = useState({ lat: 0, lng: 0 });
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
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    })
  }

  const mapPreviewImageUrl = getMapPreview(pickedLocation?.lat, pickedLocation?.lng);

  const pickOnMapHandler = async () => {
  }

  return (
    <BaseLayout>
      <MealForm
        pickedImage={pickedImage}
        pressHandler={takePhotoHandler}
        locationHandler={getLocationHandler}
        mapHandler={pickOnMapHandler}
        mapUrl={mapPreviewImageUrl}
      />
    </BaseLayout>
  )
}

export default AddMeal;
