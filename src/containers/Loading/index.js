import React, { PureComponent } from 'react';
import { ImageBackground, Image, StatusBar } from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
import { images } from '../../themes';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login0');
    }, 500);
  }

  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(255,255,255,0.1)"
          barStyle="dark-content"
        />
        <Image source={images.logo} style={style.logo} />
      </ImageBackground>
    );
  }
}
Index.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
