import { createStackNavigator } from 'react-navigation';
import { EventScreen, EventDetail } from '../containers';

export default createStackNavigator(
  {
    EventScreen: {
      screen: EventScreen,
    },
    EventDetailt: {
      screen: EventDetail,
    },
  },
  {
    initialRouteName: 'EventScreen',
    headerMode: 'modal',
  },
);
