/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import ForgotPassword from './screens/ForgotPassword';
import PasswordChange from './screens/PasswordChange';
import AccountActivation from './screens/AccountActivation';
import EmailLoad from './screens/EmailLoad';
import Loading from './screens/Loading';
import Main from './screens/MainScreen';
import Menu from './screens/MenuProfile';
import CancelSearch from './screens/CancelSearch';
import Cancel from './screens/Cancel';
import Customize from './screens/Customize';

AppRegistry.registerComponent(appName, () => Customize);
