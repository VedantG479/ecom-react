import { createSlice } from "@reduxjs/toolkit"

const initialState = {cartItems: []}

export const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const cartItem = {
                ...action.payload, 
                quantity: 1
            }
            state.cartItems.push(cartItem)
        }, 
        removeFromCart: (state, action) => {
            const cartItemId = action.payload
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id != cartItemId)
        }, 
        updateQuantity: (state, action) => {
            const cartItemId = action.payload.cartItemId
            const newQuantity = action.payload.quantity
            const item = state.cartItems.find((cartItem) => cartItem.id == cartItemId)
            if(item)    item.quantity = newQuantity;
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer