import {StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },


    
    inputView: {
        width:"90%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },

    textInput: {
        height:50,
        color:"white"
    },
    
    forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      },

      divisorBar: {
        height: 5,
        borderRadius: 2.5,
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#93DD00',
        alignSelf: 'center'
      },
  
});

export default styles;