import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearItems: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
