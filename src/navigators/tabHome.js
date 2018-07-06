import React from 'react';
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { Icons } from '../themes';
import styles from './styles';
import HomeStack from './homeStack';
import MapStack from './mapStack';
import EventStack from './eventStack';
import { Search } from '../containers';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({ tabBarVisible: navigation.state.index === 0 }),
    },
    Search,
    Event: EventStack,
    Map: MapStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconImage;
        let iconBG;
        if (routeName === 'Home') {
          iconImage = focused ? Icons.homeFocused : Icons.home;
        }
        if (routeName === 'Search') {
          iconImage = focused ? Icons.searchFocused : Icons.search;
        }
        if (routeName === 'Pin') {
          iconImage = focused ? Icons.pinFocused : Icons.pin;
        }
        if (routeName === 'Event') {
          iconImage = focused ? Icons.notificationFocused : Icons.notification;
        } else if (routeName === 'Map') {
          iconBG = (
            <View style={styles.viewPointBG}>
              <View style={styles.viewPointBGsmall}>
                <Image source={Icons.pointer} />
              </View>
            </View>
          );
        }
        return (
          <View style={styles.viewBGTabar}>
            {iconBG || null}
            <Image source={iconImage} />
          </View>
        );
      },
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      ...TabNavigator.Presets.iOSBottomTabs,
      showLabel: false,
      style: {
        backgroundColor: '#fff',
      },
    },
  },
);
