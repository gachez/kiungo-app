import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
});

export default class EmailLoad extends Component{
    render(){
        return(
         <View style = {styles.container}><Image 
              source={require('../images/gmail.png')}
              style={{width: wp('37%'), height: hp('15.625%'), position: 'absolute', left: wp('32%') }}       
            /></View>
        )
    }
}