import { StatusBar } from 'expo-status-bar';
import React from 'react';


import Home from './src/pages/Home'
import Signin from './src/pages/Signin'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes';
import { AuthProvider } from './src/ApiContext/auth'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
      {/* <Signin/> */}
    </>
  );
}


