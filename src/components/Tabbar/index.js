import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import images from '../../themes/Icons';
import { Colors } from '../../themes';

class Tabbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation, style } = this.props;
    console.log('props: ', this.props);
    console.log('navigation', navigation);
    console.log('style', style);
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.2, 1]}
        colors={[Colors.default, Colors.defaultOpacity]}
        style={style}
      >
        <BottomTabBar {...this.props} />
      </LinearGradient>
    );
  }
}
Tabbar.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  style: PropTypes.any,
};

Tabbar.defaultProps = {
  style: style.linearGradient,
};

export default Tabbar;
