import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import AuthContext from '../../ApiContext/auth';

import styles from './styles'

function Signin () {

    //contexto
    const { logar } = useContext(AuthContext)

    const { navigate } = useNavigation();

    function handleLogin () {
        navigate("Teste")
    }

    return (
        <View style={styles.container}>
                <Text style={styles.titulo}>Cofri</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Email" 
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Senha" 
                />
            </View>

            <View style={styles.divisorBar}></View>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={logar} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Signin;