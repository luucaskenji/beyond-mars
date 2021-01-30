import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState(null);

    const value = {
        userName,
        setUserName,
        userId,
        setUserId
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}