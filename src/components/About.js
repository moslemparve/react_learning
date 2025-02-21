import Header from '../Header';
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';  // Import the context
import { useCart } from '../CartContext'; // Import the hook

const About = () => {
  const { user } = useContext(CounterContext);
  const { cartItems, removeFromCart } = useCart();

  const removeItemFromCart = (id) => {  
    removeFromCart(id);
  }

  return (
    <Header>
      <div>
        <h1>Cart Items: {cartItems.length} {user}</h1>
        {cartItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <p>{product.name}</p>
            <button className="btn btn-primary" onClick={() => removeItemFromCart(product.id)}> remove </button>
          </div>
        ))}
      </div>
    </Header>
  );
};

export default About;