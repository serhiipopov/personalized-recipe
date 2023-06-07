import { instanceAuth } from '../axios';
import { FIREBASE_API_KEY } from '../../../config';

export const AccountServices = {
  async getProfile(idToken: string) {
    const response = await instanceAuth.post(`/accounts:lookup?key=${FIREBASE_API_KEY}`, {
      idToken: idToken,
    })

    return response.data
  }
};
