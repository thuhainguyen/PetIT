import { createStackNavigator } from 'react-navigation';
import { Login0, Login, Signup, Loading, Presentation } from '../containers';

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
    Presentation: {
      screen: Presentation,
    },
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  },
);
