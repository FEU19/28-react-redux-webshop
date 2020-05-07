import React from 'react';
import './App.css';

function App() {
    return (
        <>
        <header>
        	<h1>Tvättbjörnar 'R us</h1>
        	<div className="cart">Kundvagn (5)</div>
        </header>
        <main>
        	<div className="products">
        		<div>
        			<div>Otto</div>
        			<div>Pris: 100 kr</div>
        			<button>Lägg till i kundvagn</button>
        		</div>
        		<div> Lena </div>
        		<div> Ranger Rick </div>
        		<div> Rocket </div>
        		<div> Otto </div>
        		<div> Lena </div>
        		<div> Ranger Rick </div>
        		<div> Otto </div>
        		<div> Lena </div>
        		<div> Ranger Rick </div>
        		<div> Otto </div>
        		<div> Lena </div>
        		<div> Ranger Rick </div>
        	</div>
        </main>
        <footer>
        	Här berättar vi om företaget, varför tvättbjörnar är bra, osv.
        </footer>
        </>
    );
}

export default App;
