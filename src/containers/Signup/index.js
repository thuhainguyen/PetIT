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
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import style from './style';
import { images, colors } from '../../themes';
import { Custom } from '../../components';

class Signup extends PureComponent {
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
    console.log('a');
    this.props.navigation.goBack();
    return true;
  };
  verify = () => {
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(this.phoneText)
    //   .then((comfirmResult) => {
    //     console.log('comfirm', comfirmResult);
    //     comfirmResult
    //       .confirm(this.codeInput)
    //       .then((user) => {
    //         console.log('user: ', user);
    //       })
    //       .catch((error) => {
    //         console.log('error: ', error);
    //       });
    //   })
    //   .catch((error) => {
    //     console.log('error: ', error);
    //   });
    this.modalVerify.close();
    this.modalLink.open();
  };
  checkInput = (): boolean => {
    console.log(this.phoneText);
    if (this.phoneText) {
      if (this.phoneText.length < 9) return false;
      return true;
    }
    return false;
  };
  signUp = () => {
    if (this.checkInput()) {
      console.log('signUp');
      this.modalVerify.open();
      firebase.auth().languageCode = 'vi';
      // firebase
      //   .auth()
      //   .verifyPhoneNumber(this.phoneText)
      //   .on(
      //     'state_changed',
      //     (phoneAuthSnapshot) => {
      //       switch (phoneAuthSnapshot.state) {
      //         case firebase.auth.PhoneAuthState.CODE_SENT:
      //           console.log('code sent: ', phoneAuthSnapshot);
      //           this.modalVerify.open();
      //           break;
      //         case firebase.auth.PhoneAuthState.ERROR: // or 'error'
      //           console.log('verification error');
      //           console.log(phoneAuthSnapshot.error);
      //           break;
      //         case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
      //           break;
      //         case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
      //           console.log('auto verified on android');
      //           console.log(phoneAuthSnapshot);
      //           break;
      //         default:
      //           break;
      //       }
      //     },
      //     (error) => {
      //       console.log(error);
      //       console.log(error.verificationId);
      //     },
      //     (phoneAuthSnapshot) => {
      //       console.log('phoneAuth: ', phoneAuthSnapshot);
      //     },
      //   );
    }
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
                this.genText = text;
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
                this.genText = text;
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
                this.genText = text;
              }}
              style={style.input}
              returnKeyType="done"
            />
            <TouchableOpacity style={style.btn} onPress={this.signUp}>
              <Custom.Text style={style.txtBtn} onPress={this.signUp}>
                Tiếp tục
              </Custom.Text>
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
              <Custom.Text style={style.txtBtnModal} onPress={this.verify}>
                Hoàn tất
              </Custom.Text>
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

export default connect()(Signup);
