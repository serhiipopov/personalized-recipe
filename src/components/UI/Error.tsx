import { Button, StyleSheet, Text, View } from 'react-native';
import { STRINGS } from '../../constants/strings';

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <View style={styles.wrapper}>
      <Text>{STRINGS.anError}</Text>
      <Text>{message}</Text>
      <Button title={STRINGS.okay} />
    </View>
  )
}

export default Error;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
