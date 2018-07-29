import { createStackNavigator } from 'react-navigation';
import Login0 from '../containers/Login0';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Loading from '../containers/Loading';

export default createStackNavigator(
  {
    Loading: {
      screen: Loading,
    },
    Login0: {
      screen: Login0,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  },
);
