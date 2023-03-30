import { FC, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthForm from './AuthForm';
import { validateEmail, validatePassword } from '../../utils/validatiors';
import { RootStackParamList } from '../../types/route';

import { Screen } from '../../constants/screen';
import { Strings } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';
import { Credentials, CredentialsInvalid } from '../../types/auth';

interface AuthContentProps {
  onAuthenticate: (email: string, password: string) => Promise<void>;
  isLogin?: boolean;
}

const AuthContent: FC<AuthContentProps>  = ({ onAuthenticate, isLogin }) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState<CredentialsInvalid>({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  })
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate(Screen.Signup);
    } else {
      navigation.navigate(Screen.Login);
    }
  }

  const submitHandler = async (credentials: Credentials) => {
    let { email, password, confirmEmail, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsInvalid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsInvalid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert(Strings.invalidInput, Strings.pleaseCheck)
      setCredentialsInvalid({
        email: !emailIsInvalid,
        confirmEmail: !emailIsInvalid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual
      })
      return;
    }
    await onAuthenticate(email, password);
  }

  return (
    <View style={styles.containerContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Button
          title={isLogin ? Strings.createUser : Strings.logInInstead}
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
