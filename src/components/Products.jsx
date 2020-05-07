import React, { useState } from 'react';

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
    const [racoons/*, setRacoons*/] = useState(data);
    const elements = racoons.map(racoon => (
        <div key={racoon.name}>
            <div>{racoon.name}</div>
            <div>Pris: {racoon.price} kr</div>
            <button>Lägg till i kundvagn</button>
        </div>
    ))
    return (
        <div className="products">
            {elements}
        </div>
    )
}

export default Products;
