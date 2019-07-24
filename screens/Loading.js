// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import LogIn from './LogIn';
import SignUp from './SignUp';


export default class Loading extends React.Component {
    
 constructor() {
    super();
    this.state = {
      loading: true,
    };
  }    
//componentDidMount () {
//    firebase.auth().onAuthStateChanged(user => {
//        if(user){
//            this.props.navigation.navigate("LogInScreen", {screen: "LogIn"})
//        }
//      else{
//          this.props.navigation.navigate("SignUpScreen", {screen: "SignUp"})
//      }
//                                       
//    })
//}  
    
componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }
    
 componentWillUnmount() {
    this.authSubscription();
  }
    
    
static navigationOptions ={ title: 'two', header: null};
    render() {
     if (this.state.loading) return <SignUp />;
        
     if (this.state.user) return <LogIn />;    
        
   // The user is null, so they're logged out
   
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'    
  },
  logo:{
      fontFamily: 'Rubik-Regular',
      fontSize: 50
  }    
})