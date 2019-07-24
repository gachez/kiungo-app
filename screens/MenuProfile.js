import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

//styles of the page
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    closeView:{
      position: 'absolute',
      left: wp('4.5%'),
      top: hp('5.5%'),
      height: hp('5.5%'),
      width: wp('10%')    
    },
    circle:{
        width: 110,
        height: 110,
        borderWidth: 1,
        borderRadius: 150/2,
        borderColor: 'black',
         position: 'absolute',
      left:wp('35%'),
      top: hp('12%')  
    },
 username : {
  width: wp('38%'),
  height: hp('6%'),
  fontFamily: "Rubik",
  fontSize: 30,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 29,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
     padding: 3
},
    imageSize:{
        width: wp('9%'),
        height: hp('10%')
    },
   userView:{
       position: 'absolute',
       top: hp('34%'),
       left: wp('31.5%')
   },
  scoreBackground : {
  width: wp('6.9%'),
  height: hp('4.375%'),
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: 'black',
      position: 'absolute',
      left:wp('43.5%'),
      top:hp('39.5%')
},
 smallStarBackground : {
  width: wp('6.9%'),
  height: hp('4.4%'),
  backgroundColor: 'black',
  justifyContent: 'center',     
  position: 'absolute',
  right: wp('43.5%'),
  top: hp('39.5%')     
},
 seperator : {
  width: wp('18%'),
  height: 0,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: 'black',
  position:'absolute',
  left: wp('41.5%'),
  top:hp('50%')     
},
 historyBackground : {
  width: wp('58%'),
  height: hp('8.25%'),
  backgroundColor: 'white',
     position: 'absolute',
     top: hp('54.5%'),
     left: wp('21.5%')
},
  settingsBackground : {
  width: wp('58%'),
  height: hp('8.25%'),
  backgroundColor: 'white',
   position: 'absolute',
     top: hp('64%'),
     left: wp('21.5%')      
},
  helpBackground : {
 width: wp('58%'),
  height: hp('8.25%'),
  backgroundColor: 'white',
   position: 'absolute',
     top: hp('74.5%'),
     left: wp('21.5%')      
},
  logOutBackground : {
  width: wp('58%'),
  height: hp('8.25%'),
  backgroundColor: 'white',
   position: 'absolute',
     top: hp('84.5%'),
     left: wp('21.5%')      
}, 
 history : {
  width: wp('22.3%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  lineHeight: 24,     
  color: 'black',
  position: 'absolute',  
  top: hp('1%'),
  left: wp('20%')     
},
 settings : {
  width: wp('23.3%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
    position: 'absolute',  
  top: hp('1%'),
  left: wp('20%')     
} ,
  help : {
  width: wp('22.3%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
    position: 'absolute',  
  top: hp('1%'),
  left: wp('20%')      
},
 logOut : {
  width: wp('22.3%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
    position: 'absolute',  
  top: hp('1%'),
  left: wp('20%')      
}     
})
export default class MenuProfile extends Component{
     state = { currentUser: null }

      componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
    render() {
        const { currentUser } = this.state

        return (<View style = {styles.container}>
                <View style = {styles.closeView}><Image style = {{ height: 35, width: 35}} source={require('../images/closeIcon.png')} /></View>
               <View style = {styles.circle}></View>
                <View style = {styles.userView}><Text style  = {styles.username}> {currentUser } hi</Text></View>
                <View style = {styles.scoreBackground}></View>
                <View style = {styles.smallStarBackground}><Image source ={require('../images/starIcon.png')}/></View>
                <View style = {styles.seperator}></View>
                <View style = {styles.historyBackground}><Text style = {styles.history}>History</Text></View>
                <View style = {styles.settingsBackground}><Text style = {styles.settings}>Settings</Text></View>
                <View style = {styles.helpBackground}><Text style = {styles.help}>Help</Text></View>
                <View style = {styles.logOutBackground}><Text style = {styles.logOut}>Log Out</Text></View>
            </View>)
    }
}





