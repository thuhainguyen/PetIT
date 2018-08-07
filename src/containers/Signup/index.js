import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Keyboard,
  TextInput,
  Text,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import style from './style';
import { setUser } from '../../actions';
import { images, colors } from '../../themes';
import { Custom } from '../../components';

class Signup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      comfirmResult: null,
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    console.log('a');
    this.props.navigation.goBack();
    return true;
  };
  verify = () => {
    const { comfirmResult } = this.state;
    this.setState(
      {
        isSignup: true,
      },
      () => {
        comfirmResult
          .comfirm(this.codeInput)
          .then((user) => {
            this.setState(
              {
                ...user,
                isSignup: false,
              },
              () => console.log('user: ', this.state.user),
            );
          })
          .catch((error) => {
            console.log('errorComfirm: ', error);
          });
        this.modalVerify.close();
        this.modalLink.open();
      },
    );
  };
  checkInput = (): boolean => {
    console.log(this.phoneText);
    if (this.phoneText) {
      if (this.phoneText.length < 9) {
        return false;
      }
      if (!this.passwordText || !this.comfirmText) {
        return false;
      }
      if (this.passwordText !== this.comfirmText) {
        return false;
      }
      return true;
    }
    return false;
  };
  signUp = () => {
    if (this.checkInput()) {
      console.log('signUp');
      this.setState(
        {
          isSignup: true,
        },
        () => {
          firebase.auth().languageCode = 'vi';
          /* eslint-disable */
          firebase
            .auth()
            .signInWithPhoneNumber(this.phoneText)
            .then((confirmResult) =>
              this.setState(
                {
                  comfirmResult,
                  isSignup: false,
                },
                () => this.modalVerify.open(),
              ),
            )
            .catch((error) => this.console.log('error: ', error));
        },
      );
    } else {
      this.setState({
        isSignup: false,
      });
    }
    /* eslint-enable */
  };

  render() {
    return (
      <TouchableOpacity
        onPress={Keyboard.dismiss}
        activeOpacity={1}
        style={{ flex: 1, backgroundColor: 'transparent' }}
      >
        <ImageBackground source={images.background} style={style.container}>
          <View style={style.form} behavior="padding">
            <Custom.TextInput
              ref={(phone) => {
                this.phone = phone;
              }}
              placeholder="Số điện thoại"
              onChangeText={(text) => {
                this.phoneText = text;
              }}
              style={style.input}
              returnKeyType="next"
            />
            <Custom.TextInput
              ref={(gen) => {
                this.gender = gen;
              }}
              placeholder="Giới tính"
              onChangeText={(text) => {
                this.genText = text;
              }}
              style={style.input}
              returnKeyType="next"
            />
            <Custom.TextInput
              ref={(address) => {
                this.address = address;
              }}
              placeholder="Địa chỉ"
              onChangeText={(text) => {
                this.addressText = text;
              }}
              style={style.input}
              returnKeyType="next"
            />
            <Custom.TextInput
              ref={(pass) => {
                this.password = pass;
              }}
              placeholder="Mật khẩu"
              onChangeText={(text) => {
                this.passwordText = text;
              }}
              style={style.input}
              returnKeyType="next"
            />
            <Custom.TextInput
              ref={(comfirm) => {
                this.comfirmPassword = comfirm;
              }}
              placeholder="Nhập lại mật khẩu"
              onChangeText={(text) => {
                this.comfirmText = text;
              }}
              style={style.input}
              returnKeyType="done"
            />
            <TouchableOpacity style={style.btn} onPress={this.signUp}>
              {this.state.isSignup ? (
                <ActivityIndicator color={colors.white} size="small" />
              ) : (
                <Custom.Text style={style.txtBtn} onPress={this.signUp}>
                  Tiếp tục
                </Custom.Text>
              )}
            </TouchableOpacity>
            <View style={style.vBottom}>
              <Custom.Text style={style.txtBottom}>
                Bạn đã có tài khoản?
              </Custom.Text>
              <Custom.Text
                style={[
                  style.txtBottom,
                  {
                    textDecorationLine: 'underline',
                    textDecorationColor: colors.white,
                    padding: 7,
                  },
                ]}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                ĐĂNG NHẬP
              </Custom.Text>
            </View>
          </View>
          <Custom.Modal
            ref={(modal) => {
              this.modalVerify = modal;
            }}
            style={style.modal}
          >
            <Custom.Text style={style.txtModal}>
              Mã xác nhận đã gửi về số điện thoại của bạn, vui lòng nhập mã để
              tiếp tục
            </Custom.Text>
            <TextInput
              placeholder="Nhập mã vào đây ..."
              style={style.inputModal}
              underlineColorAndroid="transparent"
              onChangeText={(text) => {
                this.codeInput = text;
              }}
            />
            <TouchableOpacity style={style.btnModal} onPress={this.verify}>
              {this.state.isSignup ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Custom.Text style={style.txtBtnModal} onPress={this.verify}>
                  Hoàn tất
                </Custom.Text>
              )}
            </TouchableOpacity>
          </Custom.Modal>
          <Custom.Modal
            ref={(modal) => {
              this.modalLink = modal;
            }}
            style={style.modal}
          >
            <Custom.Text style={style.txtModal}>
              {'Bạn có muốn \n liên kết tài khoản không?'}
            </Custom.Text>
            <TouchableOpacity
              style={[style.btnModal, { backgroundColor: '#3B579D' }]}
              onPress={() => this.props.navigation.navigate('Presentation')}
            >
              <Text style={style.txtBtnModal}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.btnModal, { backgroundColor: '#F5511E' }]}
            >
              <Text style={style.txtBtnModal}>Google</Text>
            </TouchableOpacity>
          </Custom.Modal>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
/* eslint-disable */
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Signup);
