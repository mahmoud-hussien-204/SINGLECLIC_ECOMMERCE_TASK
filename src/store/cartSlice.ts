import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

interface InitialState {
  cart: ICartItem[];
  cartCount: number;
}

const initialState: InitialState = {
  cart: [],
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const {id, quantity, ...product} = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({id, quantity, ...product});
      }
      state.cartCount += quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        state.cartCount -= item.quantity;
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartSlicePersist = persistReducer({key: "cart-slice", storage}, cartSlice.reducer);

export const cartSliceActions = cartSlice.actions;
