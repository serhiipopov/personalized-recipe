import { AxiosResponse } from 'axios';
import { instanceAuth, instanceRecipe } from './axios';
import { AUTH_API_KEY } from '../constants/api';

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

    const token = response.data.idToken

    return token
  },
  createUser(email: string, password: string) {
    return  AuthAPI.authenticate('signUp', email, password)
  },
  login(email: string, password: string) {
    return AuthAPI.authenticate('signInWithPassword', email, password)
  },
}
