import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.up}>
           <Text style={styles.title}>
          SIGN IN
           </Text>
           <View style={styles.textInputContainer}>
            <TextInput style={styles.texInput}
            textContentType='emailAddress'
            keybroadType='email-address'
            >
            </TextInput>
           </View>
            <View style={styles.textInputContainer}>
            <TextInput style={styles.texInput}
            
            secureTextEntry={true}
          >
            </TextInput>
           </View>
           <TouchableOpacity style={styles.loginbutton} >
           <Text style={styles.loginbuttontitle}> SIGN IN </Text>
           </TouchableOpacity>
           <Text style = {{textDecorationLine: 'underline',}} >Forgot Password?</Text>
            <Text style= {{textDecorationLine: 'underline',marginBottom:50}}>Don't have a accout?</Text>
            </View>
              <View style={styles.down}>
              {/* <Text>FACE ID SETTING </Text>
                  <Text>To turn on/off face ID, go to[My Account]>[Setting]>[Face ID]>on/off </Text> */}
            </View>
             </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'stretch',
        backgroundColor:'rgb(234, 195, 176)'
    },
    // pass:{
    //     textDecorationLine:'underline',
    // },
    up:{
        flex:85,
          flexDirection:'column',
          backgroundColor:'white',
          justifyContent:'center',
          alignItems:'center'
    },
    down:{
        flex:15,
          flexDirection:'column',
          backgroundColor:'white',
          justifyContent:'center',
          alignItems:'center'

    },
    title:{
        
        marginBottom:50,
        color: 'black',
        textAlign:'center',
        width: 400,
        fontSize: 23
    },
    textInputContainer:{
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
         marginBottom:60,

    },
    texInput:{
        borderWidth: 1,
        width:280,
        height:45
    },
    loginbutton:{
        width:280,
        height:45,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    loginbuttontitle:{
        
        fontSize:18,
        color:'black'
    }
})