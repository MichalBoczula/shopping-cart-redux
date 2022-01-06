import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./slice/shoppingCartSlice.js";

export default configureStore({
  reducer: {
    shoppingCartSlice: shoppingCartSlice,
  },
});
