import React, { useState, useContext } from 'react';
import AppStack from './app.routes';
import AuthStack from './authStack.routes';

import AuthContext from '../../src/ApiContext/auth';

const Routes = () => {
    
    const { logado } = useContext(AuthContext)
    //const [logado, setLogado] = useState(false)

    
    return logado ? <AppStack/> : <AuthStack/>
}

export default Routes