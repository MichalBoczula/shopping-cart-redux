import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: {
    loading: false,
    cart: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    SetLoadingTrue: (state) => {
      state.loading = true;
    },
    SetLoadingFalse: (state) => {
      state.loading = false;
    },
    SetShoppingCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { SetLoadingTrue, SetLoadingFalse, SetShoppingCart } =
  shoppingCartSlice.actions;
export const shoppingCartAmount = (state) => state.shoppingCartSlice.amount;
export const shoppingCartTotal = (state) => state.shoppingCartSlice.total;
export const shoppingCartCart = (state) => state.shoppingCartSlice.cart;
export const shoppingCartLoading = (state) => state.shoppingCartSlice.loading;
export default shoppingCartSlice.reducer;
