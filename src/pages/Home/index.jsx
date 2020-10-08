import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import style from './styles'

import { useNavigation } from '@react-navigation/native';


function Home (){
    
    
    const { navigate } = useNavigation();

    

    return (
        <View style={style.container}>
            <Text style={style.text}>Olá, Estou na pagina de Home</Text>
            <TouchableOpacity 
                onPress={()=> navigate("Teste")}
                style={{backgroundColor: "#FFF", padding: 10}}>
                <Text >Tela de testes</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;