import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { createUserAsync, resetState } from '../store/auth/slice';

import BaseLayout from '../components/BaseLayout/BaseLayout';
import AuthContent from '../components/Auth/AuthContent';
import Spinner from '../components/UI/Spinner';
import { STRINGS } from '../constants/strings';
import { Credentials } from '../types/auth';

const SignupScreen = () => {
  const dispatch = useAppDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const signupHandler = async (credentials: Credentials) => {
    try {
      await dispatch(createUserAsync(credentials))
    } catch (error) {
      Alert.alert(STRINGS.authenticationFailed, STRINGS.couldNotCreateUser)
    }
    setIsAuthenticating(false)
  }

  if (isAuthenticating) return <Spinner />

  return (
    <BaseLayout>
      <AuthContent isLogin={false} onAuthenticate={signupHandler} />
    </BaseLayout>
  )
}

export default SignupScreen;
