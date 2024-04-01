import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext);
  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) =>{
          const {name, id, price, quantity} = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity} x ${price}</span>
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;