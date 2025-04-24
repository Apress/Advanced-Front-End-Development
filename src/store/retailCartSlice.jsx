import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage to persist state
const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem("retailCart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

const initialState = {
  retailCart: loadCartFromStorage(), // Separate cart for retail app
};

const retailCartSlice = createSlice({
  name: 'retailCart',
  initialState,
  reducers: {
    addToRetailCart: (state, action) => {
      const existingItem = state.retailCart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.retailCart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("retailCart", JSON.stringify(state.retailCart));  // Save to separate localStorage key
    },
    removeFromRetailCart: (state, action) => {
      state.retailCart = state.retailCart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("retailCart", JSON.stringify(state.retailCart));
    },
    clearRetailCart: (state) => {
      state.retailCart = [];
      localStorage.removeItem("retailCart");  // Clear only retail cart
    },
  },
});

export const { addToRetailCart, removeFromRetailCart, clearRetailCart } = retailCartSlice.actions;
export default retailCartSlice.reducer;
