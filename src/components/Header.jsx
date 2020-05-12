import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ setView, menu }) => {
    const cart = useSelector(state => state.cart);
    let count = 0;
    cart.forEach(cartItem => { count += cartItem.count; });

    return (
        <header>
            <h1>Tvättbjörnar 'R us</h1>
            <nav className="menu">
                <div onClick={() => setView(menu.VIEW_PRODUCTS)}>
                    Produkter
                </div>
                <div onClick={() => setView(menu.VIEW_CART)} className="cart">
                    Kundvagn ({count})
                </div>
            </nav>
        </header>
    )
}

export default Header;
