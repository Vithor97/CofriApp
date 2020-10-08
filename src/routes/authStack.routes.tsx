import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin';
import Teste from '../pages/Teste';


const {Navigator, Screen} = createStackNavigator();

function AuthStack() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Signin" component={Signin}/>
            <Screen name="Teste" component={Teste}/>
        </Navigator>
    )
}


export default AuthStack;