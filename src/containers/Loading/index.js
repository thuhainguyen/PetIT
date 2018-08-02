import React, { PureComponent } from 'react';
import { ImageBackground, StatusBar, Animated } from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
import { images } from '../../themes';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login0');
    }, 250);
  }
  setAnimation = () => {
    const ani1 = Animated.timing(this.state.opacity, {
      duration: 50,
      toValue: 0.7,
    });
    const ani2 = Animated.timing(this.state.opacity, {
      duration: 50,
      toValue: 1,
    });
    Animated.sequence([ani1, ani2]).start(this.setAnimation);
  };
  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Animated.Image
          source={images.logo}
          style={[
            style.logo,
            {
              opacity: this.state.opacity,
            },
          ]}
        />
      </ImageBackground>
    );
  }
}
Index.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
