import React, { createContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider  = ({children}) => {

    const [logado, setLogado] = useState(false)

    function logar () {
        console.log("função logar");
        setLogado(true)
    }

    return (
        <AuthContext.Provider value={{ logado, setLogado,  logar}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;