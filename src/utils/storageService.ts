import AsyncStorage from '@react-native-async-storage/async-storage';

const setStateStorage = async (state: any, key: string | null) => {
  try {
    if (key != null) {
      await AsyncStorage.setItem(state, key)
    }
  } catch (err) {
    console.log(err);
  }
}

const getStateFromStorage = async (key: string) => {
  const serializedState =  await AsyncStorage.getItem(key);
  if (serializedState === null) {
    return undefined;
  }

  return serializedState;
}

const removeKey = async (key: string) => {
  return await AsyncStorage.removeItem(key);
}

export const storageService = {
  setStateStorage,
  getStateFromStorage,
  removeKey,
};
