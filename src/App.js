import React from 'react';
import UnAuthenticatedApp from './UnAuthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import {useAuth} from './context/auth-context';

function App() {
   const {user} = useAuth();
   if (user) return <AuthenticatedApp />;
   return <UnAuthenticatedApp />;
}

export default App;
