import { instanceDB } from '../axios';
import { IMeal } from '../../types/meals';

export const FirebaseAPI = {
  async addMeal(newMeal: IMeal) {
    const response = await instanceDB.post(`/meals.json`, newMeal)
    return response.data
  },
  async getAllMeals() {
    const response = await instanceDB.get(`/meals.json`)
    return response.data
  },
  async removeMeal(mealId: string) {
    const response = await instanceDB.delete(`/meals/${mealId}.json`)
    return response.data
  }
}
