import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//STYLING FOR THE PAGE //
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageView:{
        position: 'absolute',
        left: wp('34%')
        
    },
  requestCancelled : {
  width: wp('58%'),
  height: hp('5%'),
  fontFamily: "Rubik-Regular",
  fontSize: 24,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 30,
  letterSpacing: 0,
  textAlign: "left",
  color: 'black'
},
rcView:{
    position: 'absolute',
    left: wp('20%'),
    top: hp('60%')
}    
    
})

//PAGE STRUCTURE AND CODE
export default class Cancel extends Component{
    render(){
        return(
        <View style={styles.container}>
             <View style = {styles.imageView}>
               <Image
                 source = {require('../images/checkmark.png')}
                />
             </View>
            <View style = {styles.rcView}><Text style={styles.requestCancelled}>Request Cancelled</Text></View>
            </View>
        )
    }
}