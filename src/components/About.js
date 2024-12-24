import Header from '../Header';
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';  // Import the context
const About = () => {
  const { user } = useContext(CounterContext);
    const template = true;
  return (
    <div>
     <Header/> 
     <h1>About Page with {user}</h1>
      
    </div>
  );
};

export default About;