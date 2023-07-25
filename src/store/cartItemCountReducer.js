import { createSlice } from "@reduxjs/toolkit";


export const cartItemCountSlice = createSlice({
name: 'cartItemCount',
initialState: 0,
reducers: {
    addToCart: (state) => {
        return state + 1
    }
  }
})

export const { addToCart } = cartItemCountSlice.actions