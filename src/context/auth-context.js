import React, {createContext, useContext, useEffect, useRef, useCallback} from 'react';
import {useAsync} from 'customhooks/useAsync';
import styled from 'styled-components/macro';
import {FullPageSpinner} from 'components/Spinner';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider({children}) {
   const auth = useRef();
   const {data: user, isIdle, isLoading, isSuccess, run, setData} = useAsync();
   function onAuthChange(isSignedIn) {
      isSignedIn ? setData(auth.current.currentUser.get().getId()) : setData(null);
   }

   function signIn() {
      auth.current.signIn();
   }
   signIn = useCallback(signIn, []);
   function signOut() {
      auth.current.signOut();
   }
   signOut = useCallback(signOut, []);

   useEffect(() => {
      window.gapi.load('client:auth2', () => {
         run(initialAuth());
      });
      async function initialAuth() {
         let user;
         await window.gapi.client.init({
            clientId: '408060318952-lskuju5iu7hofn8sso32gfe5lhiunblt.apps.googleusercontent.com',
            scope: 'email'
         });
         auth.current = window.gapi.auth2.getAuthInstance();
         auth.current.isSignedIn.listen(onAuthChange);
         if (auth.current.isSignedIn.get()) user = auth.current.currentUser.get().getId();
         else user = null;
         return user;
      }
   }, [run]);

   const value = {signIn, signOut, user};
   if (isIdle || isLoading) return <FullPageSpinner />;
   if (isSuccess) return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
   const context = useContext(AuthContext);
   if (!context) throw new Error('useAuth must be wrapped in AuthProvider');
   return context;
}

export {useAuth};
export default AuthProvider;
