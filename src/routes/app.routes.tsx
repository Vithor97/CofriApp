import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home';
import Teste from '../pages/Teste';


const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <Navigator>
            <Screen name="Home" component={Home}/>
            <Screen name="Teste" component={Teste}/>
        </Navigator>
    )
}


export default AppStack;