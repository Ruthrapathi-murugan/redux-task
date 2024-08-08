// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // Ensure this is the correct path to your reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
