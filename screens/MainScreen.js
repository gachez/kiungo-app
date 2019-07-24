import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';


const bars = (<Icon name="bars" size={30} color="black"/>);
//styles for the page
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    menuIcon : {
        width: wp('10%'),
        height: hp('5.7%')
    },
    menuIconView:{
        position: 'absolute',
        left: wp('4.45%'),
        top: hp('5.7%')
    },
    pageTitle : {
  width: wp('61%'),
  height: hp('5.7%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('4.7%'),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: 'black'        
  
},
    pageTitleView:{
        position: 'absolute',
        top: hp('16.9%'),
        left: wp('4.45%')
    },
    
  mechanicBackground : {
  
  width: wp('44.5%'),
  height: hp('29.5%'),
  borderRadius: wp('1.2%'),
  backgroundColor: 'rgb(220,220,220)',
  position: 'absolute',
  top: hp('27.5%'),
  left: wp('4.45%')      
},
  mechanicText:{
  
  width: wp('25.8%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('3.5%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
  marginTop: hp('23.75%'),
  marginLeft: wp('9.5%')      
  }, 
  towTruckBackground : {
  
  width: wp('44.5%'),
  height: hp('29.5%'),
  borderRadius: wp('1.2%'),
  backgroundColor: 'rgb(220,220,220)',
  position: 'absolute',
  top: hp('27.5%'),
  right: wp('4.45%')      
},
  towTruckText:{

  width: wp('25.8%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('3.5%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
   marginTop: hp('23.75%'),
  marginLeft: wp('9.5%')        
  
  },
 electricBackground : {
  width: wp('44.5%'),
  height: hp('29.5%'),
  borderRadius: wp('1.2%'),
  backgroundColor: 'rgb(220,220,220)',
  position: 'absolute',
  top: hp('58.125%'),
  left: wp('4.45%')      
},
  electricText:{
  width: wp('27.8%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('3.5%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
  marginTop: hp('23.75%'),
  marginLeft: wp('9.5%')        
  
  },
  plumberBackground : {
  width: wp('44.5%'),
  height: hp('29.5%'),
  borderRadius: wp('1.2%'),
  backgroundColor: 'rgb(220,220,220)',
  position: 'absolute',
  top: hp('58.125%'),
  right: wp('4.45%')      
},
  plumberText:{
  width: wp('25.8%'),
  height: hp('3.75%'),
  fontFamily: "Rubik-Regular",
  fontSize: hp('3.5%'),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: 'black',
   marginTop: hp('23.75%'),
  marginLeft: wp('9.5%')  
  }    
    
})

export default class Main extends Component {
    state = {currentUser: null}
    render(){
        const { currentUser} = this.state
        return(
          <View style = {styles.container}>
            <TouchableOpacity
                style = {styles.menuIconView}
                >
               <View><Text>{currentUser.email}</Text></View>
                <View style = {styles.menuIcon}>{bars}</View>
                </TouchableOpacity>
                <View style = {styles.pageTitleView}><Text style = {styles.pageTitle}>Select a service</Text></View>
                <View style = {styles.mechanicBackground}><Text style = {styles.mechanicText}>Mechanic</Text></View>
                <View style = {styles.towTruckBackground}><Text style = {styles.towTruckText}>Tow truck</Text></View>
                <View style = {styles.electricBackground}><Text style = {styles.electricText}>Electrician</Text></View>
                <View style = {styles.plumberBackground}><Text style = {styles.plumberText}>Plumber</Text></View>
                
            </View>
        )
    }
}