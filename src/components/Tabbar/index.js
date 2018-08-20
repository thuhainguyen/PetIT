import React, { PureComponent } from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs'; // eslint-disable-line
import LinearGradient from 'react-native-linear-gradient';
import style1 from './style';
import { colors } from '../../themes';

class Tabbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = () => {
    this.setState({
      isVisible: false,
    });
  };

  keyboardWillHide = () => {
    this.setState({
      isVisible: true,
    });
  };
  render() {
    const { style } = this.props;
    return this.state.isVisible ? (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.2, 1]}
        colors={[colors.default, colors.defaultOpacity]}
        style={style}
      >
        <BottomTabBar {...this.props} />
      </LinearGradient>
    ) : null;
  }
}
Tabbar.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  style: PropTypes.any, // eslint-disable-line
};

Tabbar.defaultProps = {
  style: style1.linearGradient,
};

export default Tabbar;
