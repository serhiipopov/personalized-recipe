import { FIREBASE_API_KEY } from '../../../config';
import { instanceAuth } from '../axios';
import {saveTokenToStorage, saveToStorageValue} from '../../utils/secureStore';

export const AuthAPI = {
  async authenticate(mode: string, email: string, password: string) {
    const response = await instanceAuth.post(`/accounts:${mode}?key=${FIREBASE_API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    })

    return response.data
  },
  async createUser(email: string, password: string) {
    return await AuthAPI.authenticate('signUp', email, password)
  },
  async login(email: string, password: string) {
    const response = await AuthAPI.authenticate('signInWithPassword', email, password);
    const { idToken: accessToken, refreshToken, localId } = response;
    await saveTokenToStorage(accessToken, refreshToken);
    await saveToStorageValue('localId', localId);

    return response;
  }
};
