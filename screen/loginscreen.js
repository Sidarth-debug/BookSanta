import db from '../config';
import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId : '',
            password : ''
        }

    }
    render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput style={styles.loginBox}
      placeholder = 'Enter your email id.'
      onChangeText= {(text)=>{
    this.setState({
        
    })
      }}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  loginBox : {
      width : 200,
      height : 40,
      borderWidth : 2,
      
  }
});