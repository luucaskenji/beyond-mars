import React from 'react';
import GlobalStyle from './assets/GlobalStyle';

import { Login } from './pages';
import UserProvider from './contexts/UserContext';

export default function App() {
    return (
        <UserProvider>
            <GlobalStyle />
            <Login />
        </UserProvider>
    );
}