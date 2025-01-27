import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [user,setUser] = useState('ali');
    return (
        <CounterContext.Provider value={{ user ,setUser}}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
