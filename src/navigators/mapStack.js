import { createStackNavigator } from 'react-navigation';
import { MapScreen, Store } from '../containers';

export default createStackNavigator(
  {
    MapScreen: {
      screen: MapScreen,
    },
    Store: {
      screen: Store,
    },
  },
  {
    initialRouteName: 'MapScreen',
    headerMode: 'none',
  },
);
