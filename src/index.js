import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'
import './globals.css';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { GoogleOAuthProvider } from '@react-oauth/google'

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GoogleOAuthProvider clientId='351717751939-dnrbo41t6vh74scajcho04sv9jmvb0vq.apps.googleusercontent.com'>
                <App />
            </GoogleOAuthProvider>
        </PersistGate>
    </Provider>
);

