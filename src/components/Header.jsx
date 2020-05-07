import React from 'react';

const Header = ({ setView, menu }) => (
    <header>
        <h1>Tvättbjörnar 'R us</h1>
        <nav className="menu">
            <div onClick={() => setView(menu.VIEW_PRODUCTS)}>
                Produkter
            </div>
            <div onClick={() => setView(menu.VIEW_CART)} className="cart">
                Kundvagn (5)
            </div>
        </nav>
    </header>
)

export default Header;
