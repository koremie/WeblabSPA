import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existItem = state.cartItems.find((cartItem) => cartItem.item.id == newItem.item.id);

            state.cartTotalPrice += newItem.item.price * newItem.count;
            
            if (!existItem) {
                state.cartItems.push(newItem);
            }
            else {
                existItem.count += newItem.count;
            }
        },
        removeFromCart(state, action) {
            const deleteItem = action.payload
            const currentItems = state.cartItems.filter((cartItem) => cartItem.item.id != deleteItem.item.id);
            state.cartItems = currentItems
            state.cartTotalPrice -= deleteItem.item.price * deleteItem.count;
        },
        increaseCount(state, action) {
            const cartItem = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.item.id == cartItem.item.id);
            state.cartItems[itemIndex].count += 1;
            state.cartTotalPrice += +(state.cartItems[itemIndex].item.price);
        },
        decreaseCount(state, action) {
            const cartItem = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.item.id == cartItem.item.id);
            state.cartItems[itemIndex].count -= 1;
            state.cartTotalPrice -= +(state.cartItems[itemIndex].item.price);
        }
    },
});

export const {addToCart, removeFromCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;