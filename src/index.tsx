import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
