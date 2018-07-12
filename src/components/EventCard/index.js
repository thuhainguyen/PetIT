import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import style from './style';
import images from '../../themes/Icons';

class EventCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Text>EventCard</Text>
      </View>
    );
  }
}
EventCard.propTypes = {};

export default EventCard;
