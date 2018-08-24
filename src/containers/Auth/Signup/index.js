import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import style from './style';
import { images, colors } from '../../../themes';
import { Custom } from '../../../components';
import { checkInput, checkCode } from './check';

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
  /* eslint-disable */

  /* eslint-enable */
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
                const tmp = {
                  id: user.user.uid,
                  phone: this.phoneText,
                  photoUrl: '',
                  createtime: user.user.metadata.creationTime,
                  name: this.phoneText,
                  followed: [],
                  following: [],
                  gender: this.genText,
                  address: this.addressText,
                  location: this.props.location,
                };
                this.user = tmp;
                console.log('usertmp: ', this.user);
                this.modalVerify.close();
                this.props.navigation.navigate('LinkApp', { user: this.user });
              })
              .catch((error) => {
                this.setState(
                  {
                    isComfirm: false,
                  },
                  () => {
                    const { code } = error;
                    console.log('error verifier: ', error);
                    const message = checkCode(code);
                    this.setState(
                      {
                        message,
                      },
                      () => {
                        this.modalVerify.close();
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
              messageComfirm: 'Mã xác nhận không đúng',
              isComfirm: false,
            });
          }
        },
      );
    } else {
      this.setState({
        messageComfirm: 'Mã xác nhận không đúng',
        isComfirm: false,
      });
    }
  };
  phoneText: string;
  tmpPhone: string;
  passwordText: string;

  /**
   * Gửi mã xác thực về số điện thoại
   */
  sendCodeToPhone = () => {
    this.setState(
      {
        isSignup: true,
      },
      async () => {
        firebase.auth().languageCode = 'vi';
        await firebase
          .auth()
          .verifyPhoneNumber(this.tmpPhone)
          .on('state_changed', ({ state, code, error }) => {
            switch (state) {
              case firebase.auth.PhoneAuthState.CODE_SENT:
                this.modalVerify.open();
                this.setState({
                  isSignup: false,
                  comfirmCode: code,
                });
                break;
              case firebase.auth.PhoneAuthState.ERROR: // or 'error'
                console.log('verification error');
                console.log(error);
                if (error === 'auth/unknown') {
                  this.setState({
                    message: 'Bạn cần kết nối mạng',
                    isSignup: false,
                  });
                }
                break;
              case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
                this.setState(
                  {
                    message: 'Đã hết thời gian xác thực, vui lòng thử lại',
                    isSignup: false,
                  },
                  () => this.modalVerify.close(),
                );
                break;
              case firebase.auth.PhoneAuthState.AUTO_VERIFIED:
                console.log('aaaa');
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
  };
  signUp = async () => {
    await this.setState({
      message: '',
      messageComfirm: '',
      isSignup: true,
    });
    const { result, message } = checkInput(
      this.phoneText,
      this.passwordText,
      this.comfirmText,
    );
    if (result) {
      this.tmpPhone = this.phoneText.replace(/0/, '+84');
      const query = firebase
        .database()
        .ref('user')
        .orderByChild('phone')
        .equalTo(this.phoneText);
      const queryResult = await query.once('value');
      if (queryResult.val() === null) {
        this.sendCodeToPhone();
      } else {
        this.setState({
          isSignup: false,
          message: 'Số điện thoại của bạn đã được đăng kí!',
        });
      }
    } else {
      this.setState({
        isSignup: false,
        message,
      });
    }
  };

  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <ScrollView
          style={{ width: '100%', height: '100%' }}
          keyboardShouldPersistTaps="handled"
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
            <TouchableOpacity
              style={style.btn}
              // onPress={this.getFacebookInfo}
              onPress={this.signUp}
            >
              {this.state.isSignup ? (
                <ActivityIndicator color="#2AB9B9" size="small" />
              ) : (
                <Custom.Text style={style.txtBtn}>Tiếp tục</Custom.Text>
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
            onFocus={() => {
              this.codeInput = '';
            }}
            onSubmitEditing={this.verify}
          />
          {this.state.messageComfirm ? (
            <Custom.Text style={[style.txtModal, { color: 'red' }]}>
              {this.state.messageComfirm}
            </Custom.Text>
          ) : null}
          <TouchableOpacity
            style={style.btnModal}
            onPress={!this.state.isComfirm ? this.verify : () => {}}
          >
            {this.state.isComfirm ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Custom.Text style={style.txtBtnModal} onPress={this.verify}>
                Tiếp tục
              </Custom.Text>
            )}
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
  location: PropTypes.object.isRequired,
};
/* eslint-disable */

const mapStateToProps = (state) => ({
  location: state.location,
});

export default connect(mapStateToProps)(Signup);
