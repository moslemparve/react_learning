import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const user = 'ali';
    return (
        <CounterContext.Provider value={{ user }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
