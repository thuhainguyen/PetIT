import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import style from './style';
import images from '../../themes/Icons';

class PostDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Text>PostDetail</Text>
      </View>
    );
  }
}
PostDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  }).isRequired
};

export default connect()(PostDetail);
