import { createSlice } from "@reduxjs/toolkit";

interface CartUIState{
    isOpen: boolean
}

const initialState: CartUIState = {
    isOpen:false
}

export const cartUiSlice = createSlice({
    name: 'cartUI',
    initialState: initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        openCart: (state) => {
            state.isOpen = true
        },
        closeCart: (state) => {
            state.isOpen = false
        }
    }
})

export const { toggleCart, openCart, closeCart} = cartUiSlice.actions
export default cartUiSlice.reducer