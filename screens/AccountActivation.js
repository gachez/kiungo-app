import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'white'
    },
accountMessage : {
  width: wp('88.9%'),
  height: hp('15.5%'),
  fontFamily: "Roboto",
  fontSize: hp('4%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#1a1a1a"
},
accountMessageView :{
    position: 'absolute',
    top: hp('43%'),
    left:wp('5.6%'),
    right: wp('5.6%')
},
checkEmailBackground :{
  width: wp('58%'),
  height: hp('8.5%'),
  backgroundColor: "#ffbe22",
  position: 'absolute',
  top: hp('70.8%'),
  left: wp('21%'),
  right: wp('21%'),
//  bottom: hp('13.75%')    
},
checkEmail : {
  width: wp('32.8%'),
  height: hp('3.5%'),
  fontFamily: "Roboto",
  fontSize: hp('2.9%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000",
  marginLeft: wp('12.5%'),
  marginTop: hp('2%')    
}    
});

export default class PasswordChange extends Component {
    render(){
        return(
         <View style = {styles.container}>
             <View style = {styles.accountMessageView}><Text style = {styles.accountMessage}>We've sent you an email with a link to activate your new account.</Text></View>
             <TouchableOpacity style = {styles.checkEmailBackground}><Text style = {styles.checkEmail}>CHECK EMAIL</Text></TouchableOpacity>    
            </View>
        )
    }
}