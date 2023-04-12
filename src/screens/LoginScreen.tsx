import { useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { loginAsync } from '../store/auth/slice';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import AuthContent from '../components/Auth/AuthContent';
import Spinner from '../components/UI/Spinner';
import { Login } from '../types/auth';
import { STRINGS } from '../constants/strings';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const loginHandler = async (user: Login) => {
    const { email, password } = user;

    setIsAuthenticating(true)
    try {
      await dispatch(loginAsync({ email, password }))
    } catch (error) {
      Alert.alert(STRINGS.authenticationFailed, STRINGS.pleaseCheckYourCredentials);
    }
    setIsAuthenticating(false)
  }

  if (isAuthenticating) return <Spinner />

  return (
    <BaseLayout>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </BaseLayout>
  )
}

export default LoginScreen;
