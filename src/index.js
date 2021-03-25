import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProviders from 'context';
import AuthProvider from './context/auth-context';

ReactDOM.render(
   <AppProviders>
      <AuthProvider>
         <App />
      </AuthProvider>
   </AppProviders>,
   document.getElementById('root')
);
