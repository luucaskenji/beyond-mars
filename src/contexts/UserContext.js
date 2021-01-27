import React, { createContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
}