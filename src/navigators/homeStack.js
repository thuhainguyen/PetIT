import { createStackNavigator } from 'react-navigation';
import { Home, PostDetail, Profile } from '../containers';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    PostDetail: {
      screen: PostDetail,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'modal',
  },
);
