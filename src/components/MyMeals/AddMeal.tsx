import { useCallback, useEffect, useMemo } from 'react';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addMealAsync,
  fetchAllMealsAsync,
  resetMeal,
  setInput,
  setPickedImage,
  setPickedLocation
} from '../../store/meals/slice';
import { verifyPermission } from '../../utils/verifyPermission';
import { getAddress, getMapPreview } from '../../api/location';

import BaseLayout from '../BaseLayout/BaseLayout';
import MealForm from './MealForm';

import { Meal } from '../../models/meal';
import { Screen } from '../../constants/screen';
import { AddMealRouteParams, StackNavigation } from '../../types/route';
import { Location } from '../../types/meals';
import { STRINGS } from '../../constants/strings';

const AddMeal = () => {
  const { meal } = useAppSelector(state => state.mealsReducer);
  const [cameraPermissionInformation, requestPermissionCamera] = useCameraPermissions();
  const [locationPermissionInformation, requestPermissionLocation] = useForegroundPermissions();
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();
  const route = useRoute();
  const isFocused = useIsFocused();

  const { name, pickedLocation, pickedImage } = meal;
  const { lat, lng } = pickedLocation;
  const params = route.params as AddMealRouteParams;

  const pickLocationHandler = useCallback((location: Location) => {
    dispatch(setPickedLocation(location))
  },[]);

  const enteredValueHandler = (enteredValue: string) => {
    dispatch(setInput(enteredValue))
  };

  useEffect(() => {
    if (isFocused && params) {
      const mapPickedLocation = params && {
        lat: params.pickedLat,
        lng: params.pickedLng,
      };
      dispatch(setPickedLocation(mapPickedLocation))
    }
  },[route, isFocused])

  useEffect(() => {
    const handleLocation = async () => {
      if (lat && lng) {
        const address = await getAddress(lat, lng);
        pickLocationHandler({ ...pickedLocation, address })
      }
    }

    handleLocation();
  },[pickLocationHandler, lng, lat])

  const takePhotoHandler = useCallback(async (): Promise<void> => {
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
    });

    const imageUri = image.assets?.[0].uri;
    dispatch(setPickedImage(imageUri || ''));
  }, [cameraPermissionInformation, requestPermissionCamera]);

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission(
      locationPermissionInformation,
      requestPermissionLocation,
      STRINGS.youNeedToGrantLocation
    );
    if (!hasPermission) return;

    const location = await getCurrentPositionAsync()
    dispatch(setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }))
  };

  const mapPreviewImageUrl = useMemo(() => {
    if (lat && lng) return getMapPreview(lat, lng);
    return '';
  }, [lat, lng]);

  const pickOnMapHandler = useCallback(() => {
    navigation.navigate(Screen.Map as never);
  }, [navigation]);

  const saveMealHandler = useCallback(() => {
    const mealData = new Meal(name, pickedImage || '', pickedLocation);
    dispatch(addMealAsync(mealData))
      .then(() => {
        dispatch(fetchAllMealsAsync())
      });
    navigation.navigate(Screen.MyMeals);
    dispatch(resetMeal());
  },[name, pickedImage, pickedLocation]);

  return (
    <BaseLayout>
      <MealForm
        pickedImage={pickedImage}
        pressHandler={takePhotoHandler}
        locationHandler={getLocationHandler}
        mapHandler={pickOnMapHandler}
        mapUrl={mapPreviewImageUrl}
        saveHandler={saveMealHandler}
        onChange={enteredValueHandler}
        value={name}
      />
    </BaseLayout>
  )
}

export default AddMeal;
