//signUp screen code
import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
//import {StackNavigator } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';\
import AppAuth from 'react-native-app-auth';
//import firebase from 'react-native-firebase';
//import Auth0 from 'react-native-auth0';
//const auth0 = new Auth0({ domain: 'kiungo.auth0.com', clientId: 'r2AVlBtknrA8W5-J8DSK5McXoGM74ftN' });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 logIn : {
  width: wp('30.85%'),
  height: hp('5.65%'),
  opacity: 0.3,
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
  left: wp('53%')    
},
fullnameTextboxOutline : {
  width: wp('92%'),
  height: hp('8.125%'),
  opacity: 0.6,
  borderRadius: wp('7.25%'),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.4)",
  position: 'absolute',
  top: hp('30.25%'),
  left: wp('4.45%'),
  right: wp('4.45%')       
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
  top: hp('46.25%')    
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
  top: hp('61.875%')    
},    
signUpBackground : {
  width: wp('57.7%'),
  height: hp('8.125%'),
  backgroundColor: "#ffbe22",
  position: 'absolute',
  top: hp('75.75%'),
  left: wp('22%')    
},
signUpBtn : {
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
disclaimer : {
  width: wp('92%'),
  height: hp('1.875%'),
  opacity: 0.5,
  fontFamily: "Rubik-Regular",
  fontSize: hp('1.5%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#1a1a1a",
    
},
disclaimerView :{
     position: 'absolute',
  top: hp('88.75%'),
  left: wp('4.45%') 
}    
});


      
        
export default class SignUp extends Component<Props> {
  
    static navigationOptions = {
    title: "Welcome", header: null
  }
    state = {  email: '', password: '', errorMessage: null}
    
 handleSignUp = () => {
//    firebase
//      .auth()
//      .createUserWithEmailAndPassword(this.state.email, this.state.password)
//      .then(() => this.props.navigation.navigate("MainScreen", {screen: "Main"}))
//      .catch(error => this.setState({ errorMessage: error.message }))
     
//  
//      firebase
//      .auth()
//      .createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
//      .then(() => this.props.navigation.navigate('Main'))
//      .catch(error => this.setState({ errorMessage: error.message }))
    }
    
    render() {
          
      return (
       <KeyboardAvoidingView keyboardVerticalOffset={-200} style={styles.container} enabled>
         <TouchableOpacity 
             style = {styles.logInView}
             onPress={() => this.props.navigation.navigate("LogInScreen", {screen: "LogIn"})}
             ><Text style =  {styles.logIn}>LOG IN</Text></TouchableOpacity>
         <View style = {styles.signUpView}><Text style = {styles.signUp}>SIGN UP</Text></View>
         
              <View style = {styles.highlight}></View>
         <View style = {styles.fullnameTextboxOutline}><TextInput 
                                                      placeholder = 'First Name'
            underlineColorAndroid = 'transparent'                                       style = {{fontSize: hp('2.5%'), marginLeft: wp('5.55%'), fontFamily: 'Rubik-Regular'}}       
        /></View>
         <View style = {styles.emailAddressTextboxOutline}><TextInput 
          onChangeText={email => this.setState({email})}
            value={this.state.email}                                                   placeholder = 'Email Address'
            underlineColorAndroid = 'transparent'                                       style = {{fontSize: hp('2.5%'), marginLeft: wp('5.55%'), fontFamily: 'Rubik-Regular'}}            
        /></View>  
         <View style = {styles.passwordTextboxOutline}><TextInput 
            onChangeText={password => this.setState({password})}
            value={this.state.password} 
                                                           placeholder = 'Password'
            underlineColorAndroid = 'transparent'
            style = {{fontSize: hp('2.5%'), marginLeft:wp('5.55%'), fontFamily: 'Rubik-Regular'}}                                               
        /></View>
        <TouchableOpacity 
            onPress={this.handleSignUp}
            style = {styles.signUpBackground}>
            <Text style = {styles.signUpBtn}>SIGN UP</Text>
            </TouchableOpacity>
            <View style= {styles.disclaimerView}><Text style = {styles.disclaimer}>By signing up, you agree to our terms & conditions and privacy policy </Text></View>
      </KeyboardAvoidingView>
    );
  }
}