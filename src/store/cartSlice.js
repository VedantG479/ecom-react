import { createSlice } from "@reduxjs/toolkit"

const initialState = [{cart: []}]

export const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const cartItem = {
                ...action.payload, 
                quantity: 1
            }
            state.cart.push(cartItem)
        }, 
        removeFromCart: (state, action) => {
            const cartItemId = action.payload
            state.cart.filter((cartItem) => cartItem.id !== cartItemId)
        }, 
        decrementQuantity: (state, action) => {
            const cartItemId = action.payload
            state.cart.forEach((cartItem) => {
                if(cartItem.id === cartItemId)  cartItem.quantity--
            })
        },
        incrementQuantity: (state, action) => {
            const cartItemId = action.payload
            state.cart.forEach((cartItem) => {
                if(cartItem.id === cartItemId)  cartItem.quantity++
            })
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const {addToCart, removeFromCart, decrementQuantity, incrementQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer