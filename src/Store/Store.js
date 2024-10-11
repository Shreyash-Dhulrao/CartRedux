import { configureStore } from "@reduxjs/toolkit";
import { newCart } from "../Files/CartSlice";

export const Store = configureStore({
    reducer: newCart.reducer
})
