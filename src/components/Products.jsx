import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../features/cart';

const data = [
    { name: 'Otto', price: 100 },
    { name: 'Lena', price: 150 },
    { name: 'Ranger Rick', price: 200 },
    { name: 'Rocket', price: 250 },
    { name: 'Tobias', price: 300 },
    { name: 'Sharmin', price: 350 },
    { name: 'Pontus', price: 400 },
    { name: 'Oscar', price: 450 },
    { name: 'Neda', price: 500 },
]

const Products = () => {
    const dispatch = useDispatch();
    const [racoons/*, setRacoons*/] = useState(data);
    const elements = racoons.map(racoon => {
        const handleClick = () => dispatch(actions.addToCart(racoon));
        return (
            <div key={racoon.name}>
                <div>{racoon.name}</div>
                <div>Pris: {racoon.price} kr</div>
                <button onClick={handleClick}>Lägg till i kundvagn</button>
            </div>
        );
    })
    return (
        <div className="products">
            {elements}
        </div>
    )
}

export default Products;
