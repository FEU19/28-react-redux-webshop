import React from 'react';

const Cart = () => (
    <div className="cart-container">
		<div className="show-cart">
			<div>
				<div> Otto </div>
				<div> Pris: 100kr </div>
				<div> Antal: 1 </div>
				<div className="flex-row">
					<button>+1</button>
					<button>-1</button>
				</div>
				<button>Ta bort</button>
			</div>
			<div>
				<div> Rocket </div>
				<div> </div>
			</div>
		</div>
		<div className="cart-sum"> Summa kundvagn: 5000 kr </div>
	</div>
);

export default Cart;
