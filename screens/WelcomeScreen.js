import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet, Alert,TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("User added Successfully ")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }

    userLogin=(emailId,password)=>{
        firebase.auth().SignInWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("Logged In Successfully")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                <Text style={styles.title}>Book Santa</Text>

            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType='email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}
            ></TextInput>
            <TextInput
            style={styles.loginBox}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            ></TextInput>

            <TouchableOpacity 
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}
            >
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>


            <TouchableOpacity 
            style={styles.button}
            onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00ff00',
    },
    profileContainer:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:65,
        fontWeight:"300",
        paddingBottom:30,
        color:'black',
        marginLeft:30
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'red',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'yellow',
        shadowColor:'#000',
        shadowOffset:{
            width:100,
            height:8
        },
        borderWidth:2,
        borderColor:'black'
    },
    buttonText:{
        color:'black',
        fontWeight:'200',
        fontSize:20
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    }
    
})