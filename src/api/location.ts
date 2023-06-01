import axios from 'axios';
import { GOOGLE_API_KEY } from '../../config';
import { GOOGLE_URL } from '../constants/api';

export const getMapPreview = (lat: number, lng: number) => {
  return `${GOOGLE_URL}/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
};

export const getAddress = async (lat: number, lng: number): Promise<string> => {
  const url = `${GOOGLE_URL}/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await axios.get(url);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('Failed to fetch address!')
  }

  const data = response.data;
  return data.results[0]?.formatted_address;
};
