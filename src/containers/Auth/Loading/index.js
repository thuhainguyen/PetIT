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
import { getPositionUser, setUser } from '../../../actions';

class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPositionUser();
    setTimeout(async () => {
      NetInfo.isConnected.fetch().then((isConnected) => {
        this.handleFirstConnectivityChange(isConnected);
      });
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange,
      );
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
        this.user = JSON.parse(tmp);
        this.checkLocation();
      } else {
        this.props.navigation.navigate('Login0');
      }
    }
  };
  interval = null;
  checkLocation = () => {
    if (this.props.location) {
      if (this.interval) clearInterval(this.interval);
      this.props.setUser({ ...this.user, location: this.props.location });
      this.props.navigation.navigate('Home', {
        user: { ...this.user, location: this.props.location },
      });
    } else {
      this.interval = setInterval(this.checkLocation, 20);
    }
  };

  render() {
    return (
      <ImageBackground source={images.background} style={style.container}>
        <StatusBar hidden />
        <ImageBackground source={images.logo} style={style.logo} />
      </ImageBackground>
    );
  }
}
Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  getPositionUser: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  location: state.user.location,
});

export default connect(
  mapStateToProps,
  { getPositionUser, setUser },
)(Loading);
