import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { loginAsync, resetState } from '../store/auth/slice';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import AuthContent from '../components/Auth/AuthContent';
import Spinner from '../components/UI/Spinner';
import { Login } from '../types/auth';
import { STRINGS } from '../constants/strings';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const loginHandler = async (login: Login) => {

    setIsAuthenticating(true)
    try {
      await dispatch(loginAsync(login))
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
