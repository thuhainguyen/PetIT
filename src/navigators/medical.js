import { createStackNavigator } from 'react-navigation';
import MedicalScreen from '../containers/MedicalScreen';

export default createStackNavigator(
  {
    MedicalScreen: {
      screen: MedicalScreen,
    },
  },
  {
    initialRouteName: 'MedicalScreen',
    headerMode: 'none',
  },
);
