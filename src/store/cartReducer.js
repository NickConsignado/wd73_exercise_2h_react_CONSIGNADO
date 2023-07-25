import { createSlice } from "@reduxjs/toolkit";


export const cartSlice =createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductToCart: (state, action) =>{
            const newState = [...state]
            const product = action.payload
            
            // let duplicateIndex;
            // newState.forEach(item => {
            //     if(item.id === product.id){
            //         duplicateIndex = index
            //     }
            // })

            // finding if product already exists in the array
            const duplicateIndex = newState.findIndex(item => item.id === product.id)
            //if doesn't exist yet
            if (duplicateIndex === -1){
                product.count = 1
                newState.push(product)
            }   else{
                    //Idea
               // newState[duplicateIndex].count = newState[duplicateIndex].count + 1
               newState[duplicateIndex] = {
               ...newState[duplicateIndex],
               count: newState[duplicateIndex].count + 1
                }
            }
            return newState
        }

    }
})

export const {addProductToCart} = cartSlice.actions