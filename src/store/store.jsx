import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import retailCartReducer from "./retailCartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    retailCart: retailCartReducer,
  },
});

export default store;