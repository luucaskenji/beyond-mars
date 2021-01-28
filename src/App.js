import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './assets/GlobalStyle';
import UserProvider from './contexts/UserContext';
import PhotosProvider from './contexts/PhotosContext';
import { Login, Home } from './pages';

export default function App() {
    return (
        <UserProvider>
            <PhotosProvider>
                <Router>
                    <GlobalStyle />
                    <Switch>
                        <Route path='/' exact component={Login} />
                        <Route path='/home' exact component={Home} />
                    </Switch>
                </Router>
            </PhotosProvider>
        </UserProvider>
    );
}