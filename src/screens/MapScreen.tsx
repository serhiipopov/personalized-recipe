import { useCallback, useLayoutEffect, useState } from 'react';
import MapView, { Marker, MarkerDragStartEndEvent } from 'react-native-maps';
import { Alert, StyleSheet } from 'react-native';

import IconButton from '../components/UI/IconButton';
import { Screen } from '../constants/screen';
import { StackNavigation } from '../types/route';
import { GlobalStyles } from '../constants/styles';
import { STRINGS } from '../constants/strings';

interface MapProps {
  navigation: StackNavigation;
}

const MapScreen = ({ navigation }: MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const selectLocationHandler = (event: MarkerDragStartEndEvent) => {
    const e = event.nativeEvent.coordinate;
    const lat = e.latitude;
    const lng = e.longitude;
    setSelectedLocation({ lat, lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (selectedLocation.lat === 0 && selectedLocation.lng === 0) {
      Alert.alert(STRINGS.noLocationPicked, STRINGS.byTappingOnTheMapFirst)
      return;
    }

    navigation.navigate(Screen.AddMeal, {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng
    });

  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name='save-outline'
          size={32}
          color={GlobalStyles.colors.orange500}
          onPress={savePickedLocationHandler}
        />
      )
    })

  }, [navigation, savePickedLocationHandler])

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      <Marker
        title={STRINGS.pickedLocation}
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng
        }}
      />
    </MapView>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})
