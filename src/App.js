import React, { useEffect } from "react";
import { Navbar } from "./feature/Navbar";
import CartContainer from "./feature/CartContainer";
import {
  shoppingCartTotal,
  SetLoadingFalse,
  SetLoadingTrue,
  SetShoppingCart,
  shoppingCartCart,
  shoppingCartLoading,
} from "./slice/shoppingCartSlice.js";
import { useSelector, useDispatch } from "react-redux";
const url = "https://course-api.com/react-useReducer-cart-project";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(shoppingCartLoading);
  const fetchData = async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    dispatch(SetShoppingCart(data));
    dispatch(SetLoadingTrue());
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
