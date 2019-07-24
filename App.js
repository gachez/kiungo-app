import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import ForgotPassword from './screens/ForgotPassword';
import PasswordChange from './screens/PasswordChange';
import AccountActivation from './screens/AccountActivation';
import EmailLoad from './screens/EmailLoad';
import Loading from './screens/Loading';
import Main from './screens/MainScreen';
//
//const App = StackNavigator({
//    LoadingScreen: { screen: Loading},
//    SignUpScreen: { screen: SignUp},
//    LogInScreen: { screen: LogIn},
//    ForgotScreen: {screen: ForgotPassword},
//    AccountActivationScreen: { screen: AccountActivation}
//})




const App = createStackNavigator(
  {
   
    SignUpScreen: SignUp,
    LogInScreen: LogIn,
    ForgotScreen: ForgotPassword,
    MainScreen: Main  
  },
  {
    initialRouteName: 'SignUpScreen',
  }
);

export default App;