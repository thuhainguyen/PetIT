import React, { PureComponent } from 'react';
import {
  ImageBackground,
  StatusBar,
  NetInfo,
  AsyncStorage,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style';
import { images } from '../../../themes';
import { getPositionUser } from '../../../actions';

class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(async () => {
      NetInfo.isConnected.fetch().then((isConnected) => {
        this.handleFirstConnectivityChange(isConnected);
      });
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange,
      );
      this.props.getPositionUser();
    }, 250);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange,
    );
  }
  handleFirstConnectivityChange = async (isConnected) => {
    if (!isConnected) {
      Alert.alert('Nhắc nhở', 'Bạn cần kết nối internet để sử dụng ứng dụng.', [
        { text: 'Đồng ý' },
      ]);
    } else {
      const tmp = await AsyncStorage.getItem('user');
      if (tmp) {
        const user = JSON.parse(tmp);
        this.props.navigation.navigate('Home', user);
      } else {
        this.props.navigation.navigate('Login0');
      }
    }
  };

  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <StatusBar hidden />
        <ImageBackground
          source={images.logo}
          style={[
            style.logo,
            {
              opacity: this.state.opacity,
            },
          ]}
        />
      </ImageBackground>
    );
  }
}
Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  getPositionUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  { getPositionUser },
)(Loading);
