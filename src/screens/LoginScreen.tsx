import { FC, useState } from 'react';
import { Alert } from 'react-native';
import { AuthAPI } from '../api/api';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import AuthContent from '../components/Auth/AuthContent';
import Spinner from '../components/UI/Spinner';
import { Strings } from '../constants/strings';

const LoginScreen: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const loginHandler = async (email: string, password: string) => {
    setIsAuth(true)
    try {
      await AuthAPI.login(email, password)
    } catch (error) {
      Alert.alert(Strings.authenticationFailed, Strings.pleaseCheckYourCredentials);
    }
    setIsAuth(false)
  }

  if (isAuth) return <Spinner />

  return (
    <BaseLayout>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </BaseLayout>
  )
}

export default LoginScreen;
