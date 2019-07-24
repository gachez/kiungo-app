import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// STYLING FOR THE PAGE
const styles = StyleSheet.create({
 container : {
    flex:1,
    
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center'       
},
 popupCard : {
  width: wp('77.8%'),
  height: hp('30.9%'),
  backgroundColor: 'white',
  position: 'absolute',
  left: wp('11.2%')     
},
 popupHeading : {
  width: wp('48%'),
  height: hp('14%'),
  fontFamily: "Rubik-Regular",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black'
},
 popupHeadingView:{
     marginLeft: wp('5.7%'),
     marginTop: hp('3.4%')
 },
 popupText : {
  width: wp('85.7%'),
  height: hp('25.8%'),
  opacity: 0.7,
  fontFamily: "Rubik-Regular",
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 25,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black'
},
popupTextView:{
 marginLeft: wp('4.5%'),
 marginTop: hp('-7.5%')    
}   ,
no : {
  width: wp('6.95%'),
  height: hp('3.475%'),
  fontFamily: "Rubik-Regular",
  fontSize: 18,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22,
  letterSpacing: 0,
  textAlign: "left",
  color: '#ffbe22'
},
noView:{
    marginTop: hp('-15.5%'),
    marginLeft: wp('58.7%')
},
yes : {
  width: 35,
  height: 22,
  fontFamily: "Rubik-Regular",
  fontSize: 18,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22,
  letterSpacing: 0,
  textAlign: "left",
  color: '#ffbe22'
}   ,
yesView:{
  marginTop: hp('-3.5%'),
  marginLeft: wp('45.7%')    
}    
})

// PAGE STRUCTURE AND CODE
export default class CancelSearch extends Component{
    render(){
        return(
         <View style = {styles.container}>
                <View style= {styles.popupCard}>
                    <View style = {styles.popupHeadingView}><Text style = {styles.popupHeading}>Are you sure?</Text></View>
                        <View style={styles.popupTextView}><Text style={styles.popupText}>Your search for a mechanic will be cancelled.</Text></View>
                          <TouchableOpacity style={styles.noView}><Text style={styles.no}>NO</Text></TouchableOpacity>    
                          <TouchableOpacity style={styles.yesView}><Text style={styles.yes}>YES</Text></TouchableOpacity>    
                </View>
            </View>
        )
    }
}