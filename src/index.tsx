import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './firebase';
import { FavoritesProvider } from './favorites/favorites';
import { AuthProvider } from '../src/hooks/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
