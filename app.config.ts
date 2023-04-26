import 'dotenv/config';

export interface AppConfig {
  GOOGLE_API_KEY: string,
}

export default {
  name: 'Recipe',
  version: '1.0.0',
  extra: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};
