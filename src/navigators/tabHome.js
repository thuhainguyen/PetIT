import React from 'react';
// import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { colors, icon, fonts } from '../themes';
import HomeStack from './homeStack';
import MapStack from './mapStack';
import EventStack from './eventStack';
import MedicalStack from './medical';
import { Setting } from '../containers';
import { TabbarCustom } from '../components';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Event: {
      screen: EventStack,
    },
    Map: {
      screen: MapStack,
    },
    Medical: {
      screen: MedicalStack,
    },
    Setting,
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconBG;
        if (routeName === 'Home') {
          iconBG = (
            <View
              style={{
                flex: 1,
                justifyContent: focused ? 'flex-end' : 'center',
              }}
            >
              <Image
                source={icon.home}
                style={{
                  width: focused ? 18 : 25,
                  height: focused ? 18.7 : 25.95,
                }}
              />
            </View>
          );
        }
        if (routeName === 'Event') {
          iconBG = (
            <View
              style={{
                flex: 1,
                justifyContent: focused ? 'flex-end' : 'center',
              }}
            >
              <Image
                source={icon.connect}
                style={{
                  width: focused ? 18 : 25,
                  height: focused ? 15.4 : 21.4,
                }}
              />
            </View>
          );
        }
        if (routeName === 'Medical') {
          iconBG = (
            <View
              style={{
                flex: 1,
                justifyContent: focused ? 'flex-end' : 'center',
              }}
            >
              <Image
                source={icon.soYTe}
                style={{
                  width: focused ? 18 : 25,
                  height: focused ? 19.03 : 26.43,
                }}
              />
            </View>
          );
        }
        if (routeName === 'Setting') {
          iconBG = (
            <View
              style={{
                flex: 1,
                justifyContent: focused ? 'flex-end' : 'center',
              }}
            >
              <Image
                source={icon.setting}
                style={{
                  width: focused ? 18 : 25,
                  height: focused ? 12.8 : 17.77,
                }}
              />
            </View>
          );
        } else if (routeName === 'Map') {
          iconBG = (
            <View
              style={{
                flex: 1,
                justifyContent: focused ? 'flex-end' : 'center',
              }}
            >
              <Image
                source={icon.search}
                style={{
                  width: focused ? 18 : 25,
                  height: focused ? 16.17 : 22.45,
                }}
              />
            </View>
          );
        }
        return iconBG || null;
      },
      // eslint-disable-next-line
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        const style = {
          color: colors.white,
          textAlign: 'center',
          lineHeight: 22,
          fontSize: 11,
          fontFamily: fonts.Helvetica,
        };
        if (routeName === 'Home') {
          if (focused) {
            return <Text style={style}>Trang chủ</Text>;
          }
          return null;
        }
        if (routeName === 'Event') {
          if (focused) {
            return <Text style={style}>Kết nối</Text>;
          }
          return null;
        }
        if (routeName === 'Medical') {
          if (focused) {
            return <Text style={style}>Sổ y tế</Text>;
          }
          return null;
        }
        if (routeName === 'Setting') {
          if (focused) {
            return <Text style={style}>Cài đặt</Text>;
          }
          return null;
        } else if (routeName === 'Map') {
          if (focused) {
            return <Text style={style}>Tìm kiếm</Text>;
          }
          return null;
        }
      },
    }),
    initialRouteName: 'Home',
    tabBarComponent: (props) => <TabbarCustom {...props} />, // eslint-disable-line
    tabBarOptions: {
      ...TabNavigator.Presets.iOSBottomTabs,
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
        alignItems: 'center',
      },
    },
  },
);
