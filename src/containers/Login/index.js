import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  TextInput,
  Keyboard,
} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';
import { images, icons, colors } from '../../themes';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };
  login = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={Keyboard.dismiss}
          activeOpacity={1}
        >
          <View style={style.vTop}>
            <Image source={images.logoLogin} style={style.logoLogin} />
          </View>
          <View style={style.vMid}>
            <View style={style.form}>
              <View style={style.vInput}>
                <View style={style.vImage}>
                  <Image source={icons.profile} />
                </View>
                <TextInput
                  ref={(node) => {
                    this.phoneInput = node;
                  }}
                  style={style.input}
                  maxLength={18}
                  placeholder="Số điện thoại của bạn ..."
                  placeholderTextColor={colors.white}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  returnKeyType="next"
                />
              </View>
              <View style={style.vInput}>
                <View style={style.vImage}>
                  <Image source={icons.password} />
                </View>
                <TextInput
                  ref={(node) => {
                    this.password = node;
                  }}
                  style={style.input}
                  placeholder="Mật khẩu ..."
                  placeholderTextColor={colors.white}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  secureTextEntry
                />
              </View>
            </View>
          </View>
          <View style={style.vBottom}>
            <View style={style.vBottom1}>
              <TouchableOpacity
                style={style.btn}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text style={[style.txt, { color: colors.default }]}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
              <Text
                style={style.txtBottom}
                onPress={() => {
                  console.log('quên mật khẩu ');
                }}
              >
                Quên mật khẩu?
              </Text>
            </View>
            <View style={style.vBottom2}>
              <Text
                style={[style.txtBottom, { paddingTop: 0, paddingBottom: 0 }]}
              >
                Bạn chưa có tài khoản?
              </Text>
              <Text
                style={[
                  style.txtBottom,
                  {
                    textDecorationLine: 'underline',
                    textDecorationColor: colors.white,
                  },
                ]}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                ĐĂNG KÝ
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
Index.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
