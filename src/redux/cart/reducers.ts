import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { addToCart, deleteCartItem } from "./actions";
import { ICartState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<ICartState>) => void;

export const addToCartReducer: Reducer = (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.cartItems.push(action.payload);
  });
};

export const deleteCartItemReducer: Reducer = (builder) => {
  builder.addCase(deleteCartItem, (state, action) => {
    state.cartItems = state.cartItems.filter(
      (item) => item.idMeal !== action.payload.id,
    );
  });
};
