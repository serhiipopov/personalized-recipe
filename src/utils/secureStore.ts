import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const saveToStorageValue = async (key: string, value: string | boolean) => {
  const serializedState = JSON.stringify(value);
  await SecureStore.setItemAsync(key, serializedState);
};

export const getToStorageValue = async (key: string) => {
  const serializedState = await SecureStore.getItemAsync(key)
  if (serializedState === null) {
    return undefined;
  }

  return JSON.parse(serializedState);
};

export const deleteFromStorage = async (key: string) => {
  return await SecureStore.deleteItemAsync(key)
}

export const saveTokenToStorage = async (accessToken: string, refreshToken: string) => {
  try {
    await saveToStorageValue(ACCESS_TOKEN_KEY, accessToken);
    await saveToStorageValue(REFRESH_TOKEN_KEY, refreshToken);
  } catch (error) {
    console.log('Error saving tokens:', error);
  }
};

export const getTokenFromStorage = async () => {
  try {
    const accessToken = await getToStorageValue(ACCESS_TOKEN_KEY);
    const refreshToken = await getToStorageValue(REFRESH_TOKEN_KEY);

    return { accessToken, refreshToken }
  } catch (error) {
    console.log('Error getting tokens:', error);
    return { accessToken: undefined, refreshToken: undefined };
  }
};

export const deleteTokenFromStorage = async () => {
  try {
    await deleteFromStorage(ACCESS_TOKEN_KEY);
    await deleteFromStorage(REFRESH_TOKEN_KEY);
  } catch (error) {
    console.log('Error delete tokens:', error);
  }
};
