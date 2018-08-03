import React, { PureComponent } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  TextInput,
  Keyboard,
} from 'react-native';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';
import style from './style';
import { images, icons, colors } from '../../themes';
import { Custom } from '../../components';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      // user: null,
      // message: '',
      // codeInput: '123456',
      phoneNumber: '+841627710926',
      isShowPassword: false,
      // confirmResult: null,
    };
  }
  componentDidMount() {
    // this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ user: user.toJSON() }, () => {
    //       console.log('user: ', user);
    //     });
    //   }
    // });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  login = () => {
    console.log('login');
    this.props.navigation.navigate('Home');
  };
  changePhoneNumber = (text) => {
    this.setState({
      phoneNumber: text,
    });
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
                  maxLength={16}
                  placeholder="Số điện thoại của bạn ..."
                  onChangeText={this.changePhoneNumber}
                  value={this.state.phoneNumber}
                  placeholderTextColor={colors.placeholderColorWhite}
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
                  placeholderTextColor={colors.placeholderColorWhite}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  secureTextEntry={this.state.isShowPassword}
                />
                <TouchableOpacity
                  style={style.btnShow}
                  activeOpacity={0.9}
                  onPress={() =>
                    this.setState({
                      isShowPassword: !this.state.isShowPassword,
                    })
                  }
                >
                  <Image
                    source={icons.showPassword}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={style.vBottom}>
            <View style={style.vBottom1}>
              <TouchableOpacity style={style.btn} onPress={this.login}>
                <Custom.Text
                  style={[style.txt, { color: colors.default }]}
                  onPress={this.login}
                >
                  Đăng nhập
                </Custom.Text>
              </TouchableOpacity>
              <Custom.Text
                style={style.txtBottom}
                onPress={() => {
                  console.log('quên mật khẩu ');
                }}
              >
                Quên mật khẩu?
              </Custom.Text>
            </View>
            <View style={style.vBottom2}>
              <Custom.Text
                style={[style.txtBottom, { paddingTop: 0, paddingBottom: 0 }]}
              >
                Bạn chưa có tài khoản?
              </Custom.Text>
              <Custom.Text
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
              </Custom.Text>
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
