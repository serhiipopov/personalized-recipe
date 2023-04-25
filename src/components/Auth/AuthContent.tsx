import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '../../hooks/redux';
import AuthForm from './AuthForm';

import { Credentials } from '../../types/auth';
import { RootStackParamList } from '../../types/route';
import { Screen } from '../../constants/screen';
import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';

interface AuthContentProps {
  onAuthenticate: (credentials: Credentials) => Promise<void>;
  isLogin?: boolean;
}

const AuthContent = ({ onAuthenticate, isLogin }: AuthContentProps) => {
  const { errors, isAuthenticated } = useAppSelector(state => state.authReducer);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate(Screen.Signup);
    } else {
      navigation.navigate(Screen.Login);
    }
  }

  const submitHandler = async (credentials: Credentials) => {
    await onAuthenticate(credentials)
    if (!isAuthenticated) {
      navigation.navigate(Screen.Home)
    } else {
      navigation.navigate(Screen.Signup)
    }
  }

  return (
    <View style={styles.containerContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        errors={errors}
      />
      <View>
        <Button
          title={isLogin ? STRINGS.createUser : STRINGS.logInInstead}
          color={GlobalStyles.colors.teal400}
          onPress={switchAuthModeHandler}
        />
      </View>
    </View>
  )
}

export default AuthContent;

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 100,
    padding: 24,
    backgroundColor: GlobalStyles.colors.cyan100,
    borderRadius: 8,
  }
})
