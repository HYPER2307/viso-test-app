import { createSlice } from "@reduxjs/toolkit";
import { IMeal } from "../../@types/meal";
import { CART_SLICE_NAME } from "./actions";
import { addToCartReducer, deleteCartItemReducer } from "./reducers";

export interface ICartState {
  cartItems: IMeal[];
}

export const initialState: ICartState = {
  cartItems: [],
};

export const { reducer: cart } = createSlice({
  name: CART_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    addToCartReducer(builder);
    deleteCartItemReducer(builder);
  },
});
