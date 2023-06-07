import { memo } from 'react';
import { StyleSheet, Button, View, GestureResponderEvent } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFormFields} from '../../store/auth/slice';
import Input from '../UI/Input';

import { Credentials } from '../../types/auth';
import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: (credentials: Credentials) => void;
  errors: Record<string, string>;
}

const AuthForm = memo(({ isLogin, onSubmit, errors }: AuthFormProps) => {
  const dispatch = useAppDispatch();
  const { formFields } = useAppSelector(state => state.authReducer);
  const { email, password, confirmPassword, confirmEmail } = formFields;
  const isDisabledCreateUser =
    !email?.length ||
    !password?.length ||
    !confirmPassword?.length ||
    !confirmEmail?.length;

  const isDisabledLogin = !email?.length || !password?.length;

  const onUpdateValue = (id: string, value: string) => {
    dispatch(setFormFields({ id, value }))
  }

  const submitHandler = (e: GestureResponderEvent) => {
    e.preventDefault();
    onSubmit({
      email,
      password,
      confirmPassword,
      confirmEmail,
    })
  }

  return (
    <View>
      <Input
        label='Email'
        style={styles.input}
        onChangeText={(email) => onUpdateValue('email', email)}
        error={errors?.email}
        textInputConfig={{
          id: 'email',
          value: email,
          keyBoardType: 'email-address',
        }}
      />
      {!isLogin && (
        <>
          <Input
            label='Confirm Email'
            style={styles.input}
            onChangeText={(confirmEmail) => onUpdateValue('confirmEmail', confirmEmail)}
            error={errors?.confirmEmail}
            textInputConfig={{
              id: 'confirmEmail',
              value: confirmEmail,
              keyBoardType: 'email-address',
            }}
          />
        </>
      )}
      <Input
        label='Password'
        style={styles.input}
        onChangeText={(password) => onUpdateValue('password', password)}
        error={errors?.password}
        textInputConfig={{
          id: 'password',
          value: password,
          secureTextEntry: true,
        }}
      />
      {!isLogin && (
        <>
          <Input
            label='Confirm Password'
            style={styles.input}
            onChangeText={(confirmPassword) => onUpdateValue('confirmPassword', confirmPassword)}
            error={errors?.confirmPassword}
            textInputConfig={{
              id: 'confirmPassword',
              value: confirmPassword,
              secureTextEntry: true,
            }}
          />
        </>
      )}
      <Button
        title={isLogin ? STRINGS.logIn : STRINGS.sigUp}
        color={GlobalStyles.colors.cyan800}
        onPress={submitHandler}
        disabled={!isLogin ? isDisabledCreateUser : isDisabledLogin}
      />
    </View>
  )
})

export default AuthForm;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GlobalStyles.colors.gray50,
    minHeight: 50,
    borderRadius: 8,
  }
})
