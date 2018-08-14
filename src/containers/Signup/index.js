import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  ScrollView,
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

type Props = {
  navigation: Object,
};

type State = {
  isSignup: boolean,
  isComfirm: boolean,
  comfirmCode: string,
  message: string,
  messageComfirm: string,
};

class Signup extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      isComfirm: false,
      comfirmCode: '',
      message: '',
      messageComfirm: '',
    };
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
  verify = () => {
    const { comfirmCode } = this.state;
    if (comfirmCode && this.codeInput) {
      this.setState(
        {
          isComfirm: true,
        },
        async () => {
          if (comfirmCode === this.codeInput) {
            await firebase
              .auth()
              .createUserAndRetrieveDataWithEmailAndPassword(
                `${this.phoneText}@gmail.com`,
                this.passwordText,
              )
              .then((user) => {
                console.log('user: ', user.user);
                this.props.setUser(user.user);
                this.modalVerify.close();
                this.modalLink.open();
              })
              .catch((error) => {
                this.setState(
                  {
                    isComfirm: false,
                  },
                  () => {
                    const { code } = error;
                    let message = '';
                    switch (code) {
                      case 'auth/email-already-in-use':
                        message = 'Số điện thoại đã được đăng ký';
                        break;
                      case 'auth/invalid-email':
                        message = 'Số điện thoại không hợp lệ';
                        break;
                      case 'auth/user-disabled':
                        message = 'Tài khoản đã bị khóa';
                        break;
                      case 'auth/user-not-found':
                        message = 'Số điện thoại không tồn tại';
                        break;
                      case 'auth/wrong-password':
                        message = 'Mật khẩu không đúng';
                        break;
                      case 'auth/weak-password':
                        message = 'Mật khẩu yếu';
                        break;
                      default:
                        message = code;
                        break;
                    }
                    this.setState(
                      {
                        message,
                      },
                      () => {
                        this.modalLink.close();
                      },
                    );
                  },
                );
              });
            this.setState({
              isComfirm: false,
            });
          } else {
            this.setState({
              messageComfirm: 'Mã không đúng',
              isComfirm: false,
            });
          }
        },
      );
    } else {
      console.log('codeInput không đúng');
    }
  };
  phoneText: string;
  tmpPhone: string;
  passwordText: string;
  checkInput = async (): boolean => {
    if (this.phoneText) {
      console.log(this.phoneText);
      if (this.phoneText[0] === '0') {
        this.tmpPhone = this.phoneText.replace(/0/, '+84');
        console.log(this.phoneText);
      }
      if (this.phoneText.length < 9) {
        await this.setState({
          message: 'Số điện thoại không hợp lệ',
        });
        return false;
      }
      if (!this.passwordText || !this.comfirmText) {
        await this.setState({
          message: 'Tài khoản của bạn cần có mật khẩu',
        });
        return false;
      }
      if (this.passwordText.length < 6) {
        await this.setState({
          message: 'Mật khẩu cần có tối thiểu 6 kí tự',
        });
        return false;
      }
      if (this.passwordText !== this.comfirmText) {
        await this.setState({
          message: 'Xác nhận mật khẩu không khớp',
        });
        return false;
      }
      await this.setState({
        message: '',
      });
      return true;
    }
    await this.setState({
      message: 'Bạn cần phải nhập số điện thoại',
    });
    return false;
  };

  /**
   * Gửi mã xác thực về số điện thoại
   */
  signUp = async () => {
    await this.setState({
      message: '',
      messageComfirm: '',
    });
    const check = await this.checkInput();
    if (check) {
      this.setState(
        {
          isSignup: true,
        },
        async () => {
          firebase.auth().languageCode = 'vi';
          await firebase
            .auth()
            .verifyPhoneNumber(this.tmpPhone || this.phoneText)
            .on('state_changed', ({ state, code, error }) => {
              switch (state) {
                case firebase.auth.PhoneAuthState.CODE_SENT:
                  console.log('code sent: ');
                  this.modalVerify.open();
                  this.setState({
                    isSignup: false,
                  });
                  break;
                case firebase.auth.PhoneAuthState.ERROR: // or 'error'
                  console.log('verification error');
                  console.log(error);
                  if (error === 'auth/unknown') {
                    this.setState({
                      message: 'Bạn cần kết nối mạng',
                    });
                  }
                  break;
                case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
                  this.setState({
                    messageComfirm: 'Hết thời gian xác thực',
                  });
                  break;
                case firebase.auth.PhoneAuthState.AUTO_VERIFIED:
                  this.setState({
                    comfirmCode: code,
                  });
                  console.log('code: ', code);
                  break;
                default:
              }
            });
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
      <ImageBackground source={images.background} style={style.container}>
        <ScrollView
          style={{ width: '100%', height: '100%' }}
          keyboardShouldPersistTaps="always"
        >
          <View style={style.form}>
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
              keyboardType="numeric"
              onFocus={() =>
                this.setState({
                  message: '',
                })
              }
              maxLength={14}
              onSubmitEditing={() => this.gender.focus()}
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
              onSubmitEditing={() => this.address.focus()}
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
              onSubmitEditing={() => this.password.focus()}
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
              onFocus={() =>
                this.setState({
                  message: '',
                })
              }
              returnKeyType="next"
              secureTextEntry
              onSubmitEditing={() => this.comfirmPassword.focus()}
            />
            <Custom.TextInput
              ref={(comfirm) => {
                this.comfirmPassword = comfirm;
              }}
              placeholder="Nhập lại mật khẩu"
              onFocus={() =>
                this.setState({
                  message: '',
                })
              }
              onChangeText={(text) => {
                this.comfirmText = text;
              }}
              style={style.input}
              returnKeyType="done"
              secureTextEntry
              onSubmitEditing={this.signUp}
            />
            {this.state.message.length > 0 ? (
              <Custom.Text style={{ color: 'red' }}>
                {this.state.message}
              </Custom.Text>
            ) : null}
            <TouchableOpacity style={style.btn} onPress={this.signUp}>
              {this.state.isSignup ? (
                <ActivityIndicator color="#2AB9B9" size="small" />
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
        </ScrollView>
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
          {this.state.messageComfirm ? (
            <Custom.Text style={[style.txtModal, { color: 'red' }]}>
              {this.state.messageComfirm}
            </Custom.Text>
          ) : null}
          <TouchableOpacity
            style={style.btnModal}
            onPress={this.state.isComfirm ? this.verify : () => {}}
          >
            {this.state.isComfirm ? (
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
    );
  }
}
Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
/* eslint-disable */
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Signup);
