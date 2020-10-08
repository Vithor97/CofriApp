import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';


const {Navigator, Screen} = createStackNavigator();

function AuthStack() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Signup" component={Signup}/>
            <Screen name="Signin" component={Signin}/>
        </Navigator>
    )
}


export default AuthStack;