import React from 'react'
import { View, Text, TextInput, TouchableOpacity} from 'react-native'

import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock, faAt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';

function Signup () {

    const { navigate } = useNavigation();

    function handleTologin (){
        navigate("Signin")
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Registrar dados</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Nome</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon 
                    icon={faUser} 
                    size={15} 
                    style={{top:0, margin: 7}}
                    color={ 'black' }
                    />
                    <TextInput
                        placeholder="Seu nome"
                        style={styles.textInput}
                    />
                </View>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon 
                    icon={faAt} 
                    size={15} 
                    style={{top:0, margin: 7}}
                    color={ 'black' }
                    />
                    <TextInput
                        placeholder="Seu email"
                        style={styles.textInput}
                    />
                </View>
                <Text style={styles.text_footer}>Senha</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon 
                    icon={faLock} 
                    size={15} 
                    style={{top:0, margin: 7}}
                    color={ 'black' }
                    />
                    <TextInput
                        placeholder="Seu email"
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signup, {backgroundColor: '#009387'}]}>
                        <Text style={styles.textSignUp}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleTologin} style={[styles.signup, {
                            borderColor: '#08d4c4',
                            borderWidth: 1,
                            marginTop: 15
                    }]}>
                        <Text style={styles.textSignUp}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signup;