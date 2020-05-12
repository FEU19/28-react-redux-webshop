import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';

// const data = [
//     {
//         product: { name: 'Otto', price: 100 },
//         count: 1
//     }
// ]

const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart)
    let sum = 0;
    data.forEach(cartItem => { sum += cartItem.product.price * cartItem.count });

    const elements = data.map(item => (
        <div key={item.product.name}>
            <div> {item.product.name} </div>
            <div> Pris: {item.product.price} kr </div>
            <div> Antal: {item.count} </div>
            <div className="flex-row">
                <button onClick={() => dispatch(actions.increaseAmount(item.product.name))}>+1</button>
                <button
                    disabled={item.count === 0}
                    onClick={() => dispatch(actions.decreaseAmount(item.product.name))}>-1</button>
            </div>
            <button onClick={() => dispatch(actions.removeFromCart(item.product.name))}>Ta bort</button>
        </div>
    ))
    return (
        <div className="cart-container">
    		<div className="show-cart">
                {elements}
    		</div>
    		<div className="cart-sum"> Summa kundvagn: {sum} kr </div>
    	</div>
    )
};

export default Cart;
