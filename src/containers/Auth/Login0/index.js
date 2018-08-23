import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
import { images, colors } from '../../../themes';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={images.background} style={{ flex: 1 }}>
        <View style={style.vTop}>
          <Image source={images.logo} style={style.logo} />
        </View>
        <View style={style.vBottom}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={[style.txt, { color: colors.default }]}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btn, { backgroundColor: colors.violet }]}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={style.txt}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
