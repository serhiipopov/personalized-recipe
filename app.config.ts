import 'dotenv/config';

export interface AppConfig {
  GOOGLE_API_KEY: string,
  FIREBASE_API_KEY: string,
  EDAMAM_KEY: string,
  EDAMAM_ID: string,
}

export default {
  name: 'Recipe',
  version: '1.0.0',
  extra: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    EDAMAM_KEY: process.env.EDAMAM_KEY,
    EDAMAM_ID: process.env.EDAMAM_ID,
  },
};
