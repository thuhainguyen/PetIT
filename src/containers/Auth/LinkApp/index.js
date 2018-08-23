import React, { PureComponent } from 'react';
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { Custom } from '../../../components';
import style from './style';
import { colors } from '../../../themes';

const url =
  'https://graph.facebook.com/v3.1/me?fields=email,birthday,hometown,gender,picture&access_token';

type Props = {
  navigation: Object,
  location: Object,
};

class LinkApp extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.user = this.props.navigation.getParam('user', {});
    this.state = {
      isGetFacebookInfo: false,
    };
  }

  getFacebookInfo = () => {
    this.setState({
      isGetFacebookInfo: true,
    });
    LoginManager.logInWithReadPermissions(['user_friends', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('cancel');
        } else {
          AccessToken.getCurrentAccessToken().then(async (data) => {
            console.log('data: ', data);
            const response = await fetch(`${url}=${data.accessToken}`);
            const json = await response.json();
            const tmp = {
              photoUrl: json.picture.data.url,
              name: json.name,
              email: json.email,
              location: this.props.location,
            };
            console.log('response', tmp);
            this.user = {
              ...this.user,
              ...tmp,
            };
            this.props.navigation.navigate('Presentation', { user: this.user });
          });
        }
      },
      (error) => {
        console.log('Sign in error', error);
      },
    );
  };
  skipLink = () => {
    this.props.navigation.navigate('Presentation', { user: this.user });
  };
  render() {
    return (
      <View style={style.container}>
        {this.state.isGetFacebookInfo ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <View style={style.modalContainer}>
            <Custom.Text style={style.txtModal}>
              {'Bạn có muốn \n liên kết tài khoản không?'}
            </Custom.Text>
            <TouchableOpacity
              style={[style.btnModal, { backgroundColor: '#3B579D' }]}
              onPress={this.getFacebookInfo}
            >
              <Text style={style.txtBtnModal}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.btnModal, { backgroundColor: '#F5511E' }]}
            >
              <Text style={style.txtBtnModal}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.btnModal,
                { backgroundColor: colors.white, marginTop: 50 },
              ]}
              onPress={this.skipLink}
            >
              <Text style={[style.txtBtnModal, { color: '#01579b' }]}>
                Bỏ qua
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
});

export default connect(mapStateToProps)(LinkApp);
