import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
    const VIEW_PRODUCTS = 'products', VIEW_CART = 'cart';
    const [view, setView] = useState(VIEW_PRODUCTS);
    let mainContent = null;
    if( view === VIEW_PRODUCTS ) {
        mainContent = <Products />;
    } else {// if( view == VIEW_CART ) {
        mainContent = <Cart />;
    }

    return (
        <>
        <Header setView={setView} menu={{ VIEW_PRODUCTS, VIEW_CART }} />
        <main>
            {mainContent}
        </main>
        <Footer />
        </>
    );
}

export default App;
