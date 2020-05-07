import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
const addToCart = createAction('add to cart');
const removeFromCart = createAction('remove from cart');
const increaseAmount = createAction('increase amount');
const decreaseAmount = createAction('decreaseAmount');

const actions = { addToCart, removeFromCart, increaseAmount, decreaseAmount };


const initialState = [
    {
        product: { name: 'Otto', price: 1000 },
        count: 1
    }
]

const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => [
        ...state,
        { product: action.payload, count: 1 }
    ]  // TODO: ändra antalet i stället, om produkten redan finns i listan
})


export { actions, reducer };
