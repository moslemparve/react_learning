import Header from '../Header';
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';  // Import the context
import { useCart } from '../CartContext'; // Import the hook

const About = () => {
  const { user } = useContext(CounterContext);
  const { cartItems } = useCart();

  return (
    <Header>
    <div>
     <h1>Cart Items: {cartItems.length} {user}</h1>
     {cartItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
           <p>{product.name}</p>
          </div>
        ))}
    </div>
    </Header>
  );
};

export default About;