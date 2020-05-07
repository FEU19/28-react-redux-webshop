import React from 'react';

const data = [
    {
        product: { name: 'Otto', price: 100 },
        count: 1
    }
]

const Cart = () => {
    const elements = data.map(item => (
        <div key={item.product.name}>
            <div> {item.product.name} </div>
            <div> Pris: {item.product.price} kr </div>
            <div> Antal: {item.count} </div>
            <div className="flex-row">
                <button>+1</button>
                <button>-1</button>
            </div>
            <button>Ta bort</button>
        </div>
    ))
    return (
        <div className="cart-container">
    		<div className="show-cart">
                {elements}
    		</div>
    		<div className="cart-sum"> Summa kundvagn: 5000 kr </div>
    	</div>
    )
};

export default Cart;
