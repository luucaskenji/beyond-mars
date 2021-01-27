import React from 'react';
import GlobalStyle from './assets/GlobalStyle';

import { Login } from './pages';
import UserContext from './contexts/UserContext';

export default function App() {
    return (
        <UserContext>
            <GlobalStyle />
            <Login />
        </UserContext>
    );
}