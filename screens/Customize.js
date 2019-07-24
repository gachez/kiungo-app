import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


//STYLING FOR THE PAGE
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
        
    }
    
})
//PAGE STRUCTURE AND CODE
export default class Customize extends Component{
 render(){
    return(
      <View style={styles.container}>
         <View>
             <Image 
               source = {require('../images/backIcon.png')}     
                 />
            </View>
             <View>
                <Text>Customize</Text>
             </View>
            <View><TextInput 
                      placeholder = "Make"
                      /></View>
            <View><TextInput 
                      placeholder = "Model"
                      /></View>
            <View><TextInput 
                      placeholder = "Year"
                      /></View>
            <View><Image 
                      source = {require('../images/carModelDummy.jpg')}
                      /></View>
            <View><TextInput 
                      placeholder= "Please write any details here"
                      /></View>
        </View>
    )
 }
}
