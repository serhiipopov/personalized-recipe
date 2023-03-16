import { AxiosResponse } from 'axios';
import instance from './axios';

const env = process.env;

export const RecipeAPI = {
  async getRecipe(query: string): Promise<AxiosResponse> {
   return await instance.get(`?type=public&q=${query}&?app_id=${env.EDAMAM_ID}&app_key=${env.EDAMAM_KEY}`)
  }
}
