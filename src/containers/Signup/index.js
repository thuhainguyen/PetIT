import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import signup from './style';
import images from '../../themes/Icons';

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
    this.props.navigation.goBack();
    return true;
  };
  render() {
    return (
      <ScrollView style={signup.container}>
        <View>
          <Text>Signup</Text>
        </View>
      </ScrollView>
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
