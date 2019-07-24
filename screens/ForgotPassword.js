import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';

const visibility = (<Material name="visibility" size={30} color="grey"/>);
const arrow = (<Feather name="arrow-left" size={40} color="black" />);
const styles = StyleSheet.create({
container:{
 flex: 1,
 backgroundColor: 'white'
},
backIcon : {
  position: 'absolute',
  left: wp('4.45%'),
  top: hp('5.625%')    
},
pageTitle : {
  width: wp('65%'),
  height: hp('6.625%'),
  fontFamily: "Roboto",
  fontSize: hp('4.7%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1a1a1a"
},
pageTitleView: {
    position: 'absolute',
    left: wp('19.9%'),
    top: hp('5.625%')
},
instruction : {
  width: wp('77.25%'),
  height: hp('4.75%'),
  fontFamily: "Roboto",
  fontSize: hp('3.125%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1a1a1a"
} ,
instructionView :{
  position: 'absolute',
  top: hp('30%'),
  left: wp('14.05%')    
},
passwordTextboxOutline : {
  width: wp('92%'),
  height: hp('8.125%'),

  borderRadius: wp('7.2%'),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.3)",
  position:'absolute',
  top: hp('50%'),
  left: wp('4.45%')    
},
nextBackground : {
  width: wp('57.8%'),
  height: hp('8.5%'),
  backgroundColor: "#ffbe22",
  position: 'absolute',
  top: hp('78.75%'),
  left: wp('21%')    
},
next : {
  width: wp('15%'),
  height: hp('4.45%'),
  fontFamily: "Roboto",
  fontSize: hp('3.25%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#000000",
  marginLeft: wp('22.5%'),
  marginTop: hp('2%')    
}   ,
visible:{
 position: 'absolute',
 left: wp('84.5%'),
 top: hp('51.6%'),
    opacity: 0.4
}    
});

export default class ForgotPassword extends Component {
static navigationOptions ={ title: 'two', header: null};
 render(){
  return(
      <View style = {styles.container}>
       <View style = {styles.pageTitleView}><Text style = {styles.pageTitle}>Forgot password</Text></View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("LogInScreen", {screen: "LogIn"})} style = {styles.backIcon}>{arrow}</TouchableOpacity>
        <View style = {styles.instructionView}><Text style = {styles.instruction}>Please enter a new password</Text></View>
        <View style = {styles.passwordTextboxOutline}><TextInput 
                  placeholder = 'Password'
                  underlineColorAndroid = 'transparent'    
                  style = {{fontSize: hp('3.0%'), marginLeft: wp('5.5%')}}                                          
                  /></View>
        <TouchableOpacity style = {styles.nextBackground}><Text style = {styles.next}>NEXT</Text></TouchableOpacity>  
      <View style = {styles.visible}>{visibility}</View>
      </View>
  )
 }
}