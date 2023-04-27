import { AxiosResponse } from 'axios';
import { instanceAuth, instanceRecipe } from './axios';
import { storageService } from '../utils/storageService';
import { EDAMAM_KEY, EDAMAM_ID, FIREBASE_API_KEY } from '../../config';

export const RecipeAPI = {
  async getRecipe(query: string): Promise<AxiosResponse> {
   return await instanceRecipe.get(`?type=public&q=${query}&?app_id=${EDAMAM_ID}&app_key=${EDAMAM_KEY}`)
  }
};

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
    const response = await AuthAPI.authenticate('signUp', email, password)
    await storageService.setStateStorage('token', response.idToken)
    return response
  },
  async login(email: string, password: string) {
    const token = await storageService.getStateFromStorage('token')
    if (token) {
      return token
    } else {
      const response = await AuthAPI.authenticate('signInWithPassword', email, password)
      await storageService.setStateStorage('token', response.idToken)
      return response
    }
  }
};
