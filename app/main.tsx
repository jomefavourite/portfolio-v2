import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import { RouterProvider } from 'react-router';
import routes from './router/routes.tsx';
import Providers from '../utils/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  </React.StrictMode>
);
