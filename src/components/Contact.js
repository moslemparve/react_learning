// components/Home.js
import React, { useContext } from 'react';
import Header from '../Header';
import { CounterContext } from './CounterContext';  // Import the context

const Contact = () => {
  const { user } = useContext(CounterContext);
  return (
    <div>
         <Header/>
      <h1>Contact Page {user}</h1>
    </div>
  );
};

export default Contact;