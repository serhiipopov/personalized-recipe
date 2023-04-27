import Constants from 'expo-constants';
import { AppConfig } from './app.config';

export const {
  GOOGLE_API_KEY,
  FIREBASE_API_KEY,
  EDAMAM_KEY,
  EDAMAM_ID
} = Constants.manifest?.extra as AppConfig;
