import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (cartState) => cartState.cartItems,
);
