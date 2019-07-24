

import React, {Component} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import firebase from 'react-native-firebase';
import Material from 'react-native-vector-icons/MaterialIcons';


const visibility = (<Material name="visibility" size={30} color="grey"/>);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 logIn : {
  width: wp('30.85%'),
  height: hp('5.65%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('4.68%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1a1a1a"
     
},
logInView :{
     position: 'absolute',
  left:wp('17.2%'),
  top: hp('12.5%')
},
 signUp : {
  width: wp('35.85%'),
  height: hp('5.65%'),
 opacity: 0.3,     
  fontFamily: "Rubik-Regular",
  fontSize: hp('4.68%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1a1a1a",
   
},
signUpView : {
  position: 'absolute',
  right:wp('17.2%'),
  top: hp('12.5%')     
}    ,
highlight : {
  width: wp('16.7%'),
  height: 0,
  borderStyle: "solid",
  borderWidth: 3,
  borderColor: "#ffbe22",
  position: 'absolute',
  top: hp('18.75%'),
  right: wp('62%')    
},

emailAddressTextboxOutline : {
  width: wp('92%'),
  height: hp('8.125%'),
  opacity: 0.6,
  borderRadius: wp('7.25%'),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.4)",
  position: 'absolute',
  left: wp('4.45%'),
  top: hp('41.25%')    
},
passwordTextboxOutline : {
  width: wp('92%'),
  height: hp('8.125%'),
  opacity: 0.6,
  borderRadius: wp('7.25%'),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.4)",
  position: 'absolute',
  left: wp('4.45%'),
  top: hp('58.275%')    
},    
logInBackground : {
  width: wp('57.7%'),
  height: hp('8.125%'),
  backgroundColor: "#ffbe22",
  position: 'absolute',
  top: hp('72.75%'),
  left: wp('22%')    
},
logInBtn : {
  width: wp('19.75%'),
  height: hp('3.45%'),
  fontFamily: "Rubik-Regular",
  fontSize: 18,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000",
  position: 'absolute',
  top: hp('2%'),
  left: wp('19%')    
},
forgotPassword : {
  width: wp('30.2%'),
  height: hp('3.65%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('2.18%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1a1a1a"
},
forgotPasswordView :{
    position: 'absolute',
    
    top: hp('85.9%'),
    left: wp('35%')
}    
});


export default class App extends Component<Props> {
      static navigationOptions ={ title: 'two', header: null};
      state = { email: '', password: '', errorMessage: null}

//    handleLogin = () => {
////    const { email, pasword } = this.stat
//    firebase
//      .auth()
//      .signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
//      .then(() =>  this.props.navigation.navigate("MainScreen", {screen: "Main"}))
//      .catch(error => this.setState({ errorMessage: error.message }))
//  }
    

 onLogin = () => {
//  const { email, password } = this.state;
//  firebase.auth().signInWithEmailAndPassword(email, password)
//    .then((user) => {
//      // If you need to do anything with the user, do it here
//      // The user will be logged in automatically by the 
//      // `onAuthStateChanged` listener we set up in App.js earlier
//    })
//    .catch((error) => {
//      const { code, message } = error;
//      // For details of error codes, see the docs
//      // The message contains the default Firebase string
//      // representation of the error
//    });
}
  render() {
//      const { state, navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView  keyboardVerticalOffset={-200} style={styles.container}>
        <View style = {styles.logInView}><Text style = {styles.logIn}>LOG IN</Text></View>
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("SignUpScreen", {screen: "SignUp"})}
            style = {styles.signUpView}><Text style = {styles.signUp}>SIGN UP</Text></TouchableOpacity>
        <View style = {styles.highlight}></View>
   
         <View style = {styles.emailAddressTextboxOutline}><TextInput 
            onChangeText={email => this.setState({email})}
            value={this.state.email}                                                   placeholder = 'Email Address'
            underlineColorAndroid = 'transparent'                                       style = {{fontFamily: 'Rubik-Regular', fontSize: hp('2.5%'), marginLeft: wp('5.55%')}}            
        /></View>  
         <View style = {styles.passwordTextboxOutline}><TextInput 
              onChangeText={password => this.setState({password})}
            value={this.state.password}
                                                           placeholder = 'Password'
            underlineColorAndroid = 'transparent'
            style = {{fontSize: hp('2.5%'), marginLeft:wp('5.55%'), fontFamily: 'Rubik-Regular'}}                                               
        /></View>
        <TouchableOpacity 
            onPress={this.onLogin}
            style = {styles.logInBackground}>
            <Text style = {styles.logInBtn}>LOG IN</Text>
            </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("ForgotScreen", {screen: "ForgotPassword"})}
            style = {styles.forgotPasswordView}><Text style = {styles.forgotPassword}>Forgot password</Text></TouchableOpacity>    
      </KeyboardAvoidingView>
    );
  }
}


