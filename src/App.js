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

/* Gameplan:
1. gör så att Products och Cart använder data för att generera JSX, i stället för statisk HTML (lista med produktobjekt osv)
2. installera Redux
3. skapa en feature för kundvagnen i Redux
4. Cart ska hämta sin data från kundvagnens feature
5. Products ska kunna lägga till i kundvagnen
6. Cart ska kunna ändra antal och ta bort från kundvagnen*/
export default App;
