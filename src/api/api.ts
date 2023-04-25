import { AxiosResponse } from 'axios';
import { instanceAuth, instanceRecipe } from './axios';
import { AUTH_API_KEY } from '../constants/api';
import { storageService } from '../utils/storageService';

const env = process.env;

export const RecipeAPI = {
  async getRecipe(query: string): Promise<AxiosResponse> {
   return await instanceRecipe.get(`?type=public&q=${query}&?app_id=${env.EDAMAM_ID}&app_key=${env.EDAMAM_KEY}`)
  }
}

export const AuthAPI = {
  async authenticate(mode: string, email: string, password: string) {
    const response = await instanceAuth.post(`/accounts:${mode}?key=${AUTH_API_KEY}`, {
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
}
