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
} from 'react-native';
import { connect } from 'react-redux';
import style from './style';
import images from '../../themes/Icons';

class Map extends PureComponent {

static navigationOptions = {
  showLabel: false,
  title: 'Maps',
}

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      repassword: '',
      isLoading: false,
    };
  }
  render() {
    return (
      <ScrollView style={style.container}>
        <View>
          <Text>Map</Text>
        </View>
      </ScrollView>
    );
  }
}
Map.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,

};

export default connect()(Map);
