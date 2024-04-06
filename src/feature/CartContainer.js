import React from "react";
import CartItem from "./CartItem";
import {
  shoppingCartTotal,
  shoppingCartCart,
  ClearShoppingCart,
  CountAmountAndTotal,
} from "../slice/shoppingCartSlice.js";
import { useSelector, useDispatch } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();
  const total = useSelector(shoppingCartTotal);
  const cart = useSelector(shoppingCartCart);
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} data-testid={`amount-${item.id}`} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span id="total">{total}$</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(ClearShoppingCart());
            dispatch(CountAmountAndTotal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
