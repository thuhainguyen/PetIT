import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Custom } from '../../../../components';
import styleDefault from './style';

const Property = ({ style, name, content }) => (
  <View style={style.row}>
    <View style={style.col}>
      <Custom.Text style={style.titleCol}>{name}</Custom.Text>
    </View>
    <View style={style.col}>
      <Custom.Text style={style.contentCol}>{content}</Custom.Text>
    </View>
  </View>
);

Property.propTypes = {
  style: PropTypes.any, // eslint-disable-line
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Property.defaultProps = {
  style: styleDefault,
};

export default Property;
