import { StyleSheet, View } from 'react-native';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../../constants/styles';

interface LocationPickerProps {
  locationHandler: () => void;
  mapHandler: () => void;
}

const LocationPicker = ({ locationHandler, mapHandler }: LocationPickerProps) => {
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <View>
          <IconButton
            name='location-outline'
            size={32}
            color={GlobalStyles.colors.orange500}
            onPress={locationHandler}
          />
        </View>
        <View>
          <IconButton
            name='map-outline'
            size={32}
            color={GlobalStyles.colors.orange500}
            onPress={mapHandler}
          />
        </View>
      </View>
    </View>
  )
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.gray200,
    justifyContent: 'center'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
