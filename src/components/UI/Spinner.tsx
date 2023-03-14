import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Spinner: FC = () => {
  return (
    <ActivityIndicator size='large' color={GlobalStyles.colors.teal400} />
  )
}

export default Spinner;
