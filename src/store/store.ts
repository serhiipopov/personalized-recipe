import {
  AnyAction,
  Store,
  ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducers';

export let store: Store<any>

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// }
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = (preloadedState?: any) => (
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })
);

export const initializeStore = (preloadedState: any) => {
  let initialStore = store ?? setupStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    initialStore = setupStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    // store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof global === 'undefined') return initialStore;
  // Create the store once in the client
  if (!store) store = initialStore;

  return initialStore;
};

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

store = setupStore()
// export const persist = persistStore(store)
