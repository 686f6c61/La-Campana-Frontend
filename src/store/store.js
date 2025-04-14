import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/apiSlice';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from './reducers/productsSlice';
import categoryReducer from './reducers/categorySlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'products', 'category'], // Reducers que querés persistir
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
