import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    const value = {
        token,
        setToken,
        userName,
        setUserName
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}