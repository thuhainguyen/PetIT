import React from 'react';
// import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  createBottomTabNavigator,
  TabNavigator,
} from 'react-navigation';
import { Icons, Colors, Icon } from '../themes';
import styles from './styles';
import HomeStack from './homeStack';
import MapStack from './mapStack';
import EventStack from './eventStack';
import { Search, Setting } from '../containers';
import { TabbarCustom } from '../components';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0,
      }),
    },
    Search,
    Map: {
      screen: MapStack,
      navigationOptions: {
        title: 'Maps',
        iconStyle: {
          width: 100,
          height: 100,
          backgroundColor: 'red',
          elevation: 10,
          top: -10,
        },
      },
    },
    Event: EventStack,
    Setting,
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
        if (routeName === 'Setting') {
          iconBG = (
            <Image
              source={Icon.setting}
              style={{
                width: 24,
                height: 20,
                tintColor: focused ? Colors.default : 'grey',
              }}
            />
          );
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
    initialRouteName: 'Map',
    tabBarComponent: props =>
      (<TabbarCustom
        {...props}
      />),
    tabBarOptions: {
      ...TabNavigator.Presets.iOSBottomTabs,
      showLabel: true,
      labelStyle: {
        color: Colors.white,
      },
      style: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        height: 48,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      tabStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);