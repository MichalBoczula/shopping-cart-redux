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
    CountAmountAndTotal: (state) => {
      const { tempTotal, tempAmount } = state.cart.reduce(
        (result, item) => {
          result.tempTotal += item.price * item.amount;
          result.tempAmount += item.amount;
          return result;
        },
        {
          tempTotal: 0,
          tempAmount: 0,
        }
      );
      state.total = parseFloat(tempTotal.toFixed(2));
      state.amount = tempAmount;
    },
    ClearShoppingCart: (state) => {
      state.cart = [];
    },
    ToogleAmount: (state, action) => {
      const tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            item.amount += action.payload.action;
            return item;
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      state.cart = tempCart;
    },
    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  SetLoadingTrue,
  SetLoadingFalse,
  SetShoppingCart,
  CountAmountAndTotal,
  ClearShoppingCart,
  ToogleAmount,
  RemoveItem,
} = shoppingCartSlice.actions;
export const shoppingCartAmount = (state) => state.shoppingCartSlice.amount;
export const shoppingCartTotal = (state) => state.shoppingCartSlice.total;
export const shoppingCartCart = (state) => state.shoppingCartSlice.cart;
export const shoppingCartLoading = (state) => state.shoppingCartSlice.loading;
export default shoppingCartSlice.reducer;
