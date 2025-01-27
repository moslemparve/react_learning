// components/Home.js
import React, { useContext } from 'react';
import Header from '../Header';
import { CounterContext } from './CounterContext';  // Import the context

const Contact = () => {
  const { user, setUser } = useContext(CounterContext);
  return (
    <div>
         <Header>
         <h1>Contact Page {user}</h1>
         <button onClick={() => setUser('Ali Hussain')}>
        Update Value
      </button>
         </Header>
    </div>
  );
};

export default Contact;