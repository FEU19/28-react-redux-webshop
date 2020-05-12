import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
const addToCart = createAction('add to cart');
const removeFromCart = createAction('remove from cart');
const increaseAmount = createAction('increase amount');
const decreaseAmount = createAction('decreaseAmount');

const actions = { addToCart, removeFromCart, increaseAmount, decreaseAmount };


const initialState = [
    // {
    //     product: { name: 'Otto', price: 1000 },
    //     count: 1
    // }
]

const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        let found = state.find(cartItem => cartItem.product.name === action.payload.name);
        if( found ) {
            return state.map(cartItem => {
                if( cartItem.product.name === action.payload.name ) {
                    return { ...cartItem, count: cartItem.count + 1 }
                } else {
                    return cartItem;
                }
            });
        } else {
            return [
                ...state,
                { product: action.payload, count: 1 }
            ];
        }
    },  // addToCart

    [increaseAmount]: (state, action) => (
        state.map(cartItem => {
            if( cartItem.product.name === action.payload ) {
                return { ...cartItem, count: cartItem.count + 1 }
            } else {
                return cartItem;
            }
        })
    ),  // increaseAmount

    [decreaseAmount]: (state, action) => (
        state.map(cartItem => {
            if( cartItem.product.name === action.payload ) {
                return { ...cartItem, count: cartItem.count - 1 }
            } else {
                return cartItem;
            }
        })
    ),

    [removeFromCart]: (state, action) => (
        state.filter(cartItem => cartItem.product.name !== action.payload)
    )
})










export { actions, reducer };
