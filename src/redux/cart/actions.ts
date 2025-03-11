import { createAction } from "@reduxjs/toolkit";
import { IMeal } from "../../@types/meal";

export const CART_SLICE_NAME = "cart";

export const addToCart = createAction<IMeal>(`${CART_SLICE_NAME}/addToCart`);

export const deleteCartItem = createAction<{ id: string }>(
  `${CART_SLICE_NAME}/deleteCartItem`,
);
