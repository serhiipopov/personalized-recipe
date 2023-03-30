import { FC, useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Input from '../UI/Input';
import { Strings } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';
import { Credentials, CredentialsInvalid } from '../../types/auth';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: (credentials: Credentials) => void;
  credentialsInvalid: CredentialsInvalid;
}

const AuthForm: FC<AuthFormProps> = ({ isLogin, onSubmit, credentialsInvalid }) => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  })

  const { email, password, confirmPassword, confirmEmail } = formFields;

  const onUpdateValue = (id: string, value: string) => {
    setFormFields({...formFields, [id]: value});
  }

  const submitHandler = () => {
    onSubmit({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      confirmEmail: confirmEmail
    })
  }

  // const {
  //   email: email,
  //   password: password,
  //   confirmEmail: confirmEmail,
  //   confirmPassword: confirmPassword,
  // } = credentialsInvalid

  return (
    <View style={styles.containerForm}>
      <Input
        label='Email'
        style={styles.input}
        onChangeText={(email) => onUpdateValue('email', email)}
        textInputConfig={{
          id: 'email',
          value: email,
          keyBoardType: 'email-address',
          // autoCapitalize: false,
        }}
      />
      {!isLogin && (
        <>
          <Input
            label='Confirm Email'
            style={styles.input}
            onChangeText={(confirmEmail) => onUpdateValue('confirmEmail', confirmEmail)}
            textInputConfig={{
              id: 'confirmEmail',
              value: confirmEmail,
              keyBoardType: 'email-address',
              // autoCapitalize: false,
            }}
          />
        </>
      )}
      <Input
        label='Password'
        style={styles.input}
        onChangeText={(password) => onUpdateValue('password', password)}
        textInputConfig={{
          id: 'password',
          value: password,
          secureTextEntry: true,
          // autoCapitalize: false,
        }}
      />
      {!isLogin && (
        <>
          <Input
            label='Confirm Password'
            style={styles.input}
            onChangeText={(confirmPassword) => onUpdateValue('confirmPassword', confirmPassword)}
            textInputConfig={{
              id: 'confirmPassword',
              value: confirmPassword,
              // autoCapitalize: false,
              secureTextEntry: true,
            }}
          />
        </>
      )}
      <Button
        title={isLogin ? Strings.logIn : Strings.sigUp}
        color={GlobalStyles.colors.cyan800}
        onPress={submitHandler}
      />
    </View>
  )
}

export default AuthForm;

const styles = StyleSheet.create({
  containerForm: {},
  input: {
    backgroundColor: GlobalStyles.colors.gray50,
    minHeight: 50,
    borderRadius: 8,
  }
})

