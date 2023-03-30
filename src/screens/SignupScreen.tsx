import { FC, useState } from 'react';
import { AuthAPI } from '../api/api';
import { Alert } from 'react-native';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import AuthContent from '../components/Auth/AuthContent';
import Spinner from '../components/UI/Spinner';
import { Strings } from '../constants/strings';

const SignupScreen: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signupHandler = async (email: string, password: string) => {
    setIsAuth(true);
    try {
      await AuthAPI.createUser(email, password)
    } catch (error) {
      Alert.alert(Strings.authenticationFailed, Strings.couldNotCreateUser)
    }
    setIsAuth(false);
  }

  if (isAuth) return <Spinner />

  return (
    <BaseLayout>
      <AuthContent onAuthenticate={signupHandler} />
    </BaseLayout>
  )
}

export default SignupScreen;
