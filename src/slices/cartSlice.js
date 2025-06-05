import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utlls/cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : 
    { cartItems: [], shippingAddress :{}, paymentMethod:'paypal'};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const newItem = action.payload;

            const existItem = state.cartItems.find((currItem) => currItem._id === newItem._id)

            if (existItem) {
                state.cartItems = state.cartItems.map((currItem) =>
                    currItem._id === newItem._id ? newItem : currItem
                );
            } else {
                state.cartItems = [...state.cartItems, newItem]
            }

            return updateCart(state);
        },
        changeItemQty: (state, action) => {

            state.cartitems = state.cartItems.map((cartItem) => {
                if (cartItem._id === action.payload._id) {
                    cartItem.qty = action.payload.qty;
                }
            })

            return updateCart(state);

        },
        removeFromCart: (state, action) => {
            const currItemId = action.payload;
            state.cartItems = state.cartItems.filter((cartItem) => cartItem._id !== currItemId);

            // If updateCart mutates state, just call it
            return updateCart(state);
        },
        saveShippingAddress : (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },
        savePaymentMethod : (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },
        clearCartItems : (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        }
    }
})

export const { addToCart, changeItemQty, removeFromCart, savePaymentMethod, saveShippingAddress, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;