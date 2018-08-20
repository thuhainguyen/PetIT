import React, { PureComponent } from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style';
import { images, icons, colors } from '../../../themes';
import { Custom } from '../../../components';
import { setUser } from '../../../actions';

type Props = {
  navigation: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

type State = {
  message: PropTypes.string,
  isShowPassword: PropTypes.bool,
  isLogin: PropTypes.bool,
};

class Index extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      message: '',
      isShowPassword: true,
      isLogin: false,
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };

  signOut = () => {
    firebase.auth().signOut();
  };
  phoneText: string;
  passwordText: string;
  checkInput = async (): boolean => {
    if (!this.phoneText) {
      await this.setState({
        message: 'Bạn cần nhập số điện thoại',
      });
      return false;
    }
    if (this.phoneText.length < 9) {
      await this.setState({
        message: 'Số điện thoại không đúng',
      });
      return false;
    }
    if (!this.passwordText || this.passwordText.length < 6) {
      await this.setState({
        message: 'Mật khẩu không đúng',
      });
      return false;
    }
    return true;
  };
  login = async () => {
    await this.setState({
      message: '',
      isLogin: true,
    });
    if (this.checkInput()) {
      firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(
          `${this.phoneText}@gmail.com`,
          this.passwordText,
        )
        .then(async (user) => {
          this.props.setUser(user.user);
          this.props.navigation.navigate('Home');
        })
        .catch((error) => {
          const { code } = error;
          let message = '';
          switch (code) {
            case 'auth/invalid-email':
              message = 'Số điện thoại không hợp lệ';
              break;
            case 'auth/user-disabled':
              message = 'Tài khoản đã bị khóa';
              break;
            case 'auth/user-not-found':
              message = 'Tài khoản không tồn tại';
              break;
            case 'auth/wrong-password':
              message = 'Mật khẩu không đúng';
              break;
            default:
              message = 'Tài khoản hoặc mật khẩu không đúng';
              break;
          }
          this.setState({
            message,
            isLogin: false,
          });
        });
    }
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
                  onChangeText={(text) => {
                    this.phoneText = text;
                  }}
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
                  onChangeText={(text) => {
                    this.passwordText = text;
                  }}
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
              {this.state.message ? (
                <Custom.Text style={{ color: 'red' }}>
                  {this.state.message}
                </Custom.Text>
              ) : null}
            </View>
          </View>
          <View style={style.vBottom}>
            <View style={style.vBottom1}>
              <TouchableOpacity style={style.btn} onPress={this.login}>
                {this.state.isLogin ? (
                  <ActivityIndicator color={colors.default} size="small" />
                ) : (
                  <Custom.Text style={[style.txt, { color: colors.default }]}>
                    Đăng nhập
                  </Custom.Text>
                )}
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
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Index);
