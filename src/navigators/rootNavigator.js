import { createSwitchNavigator } from 'react-navigation';
import Auth from './authStack';
import TabHome from './tabHome';

export default createSwitchNavigator(
  {
    Auth: {
      screen: Auth,
    },
    TabHome: {
      screen: TabHome,
    }
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Auth',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
