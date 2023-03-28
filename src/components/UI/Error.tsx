import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Strings } from '../../constants/strings';

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{Strings.anError}</Text>
      <Text>{message}</Text>
      <Button title={Strings.okay} />
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
