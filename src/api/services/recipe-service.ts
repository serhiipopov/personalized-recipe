import { AxiosResponse } from 'axios/index';
import { instanceRecipe } from '../axios';
import { EDAMAM_ID, EDAMAM_KEY } from '../../../config';

export const RecipeAPI = {
  async getRecipe(query: string): Promise<AxiosResponse> {
    return await instanceRecipe.get(`?type=public&q=${query}&?app_id=${EDAMAM_ID}&app_key=${EDAMAM_KEY}`)
  }
};
