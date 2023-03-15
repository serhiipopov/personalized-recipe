import { FC } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Spinner: FC = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size='large' color={GlobalStyles.colors.teal700} />
    </View>
  )
}

export default Spinner;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center'
  }
})
