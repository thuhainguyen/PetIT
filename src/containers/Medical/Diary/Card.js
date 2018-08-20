import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colors } from '../../../themes';
import { ratioH, ratioW } from '../../../utilities/Tranform';
import { Custom } from '../../../components';

const style = StyleSheet.create({
  container: {
    width: '98%',
    height: 120 * ratioH,
    paddingTop: 5 * ratioH,
    marginLeft: '1%',
    backgroundColor: colors.default,
    borderRadius: 7 * ratioH,
    flexDirection: 'row',
    marginBottom: 5 * ratioH,
  },
  col: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 7 * ratioW,
    borderRightColor: colors.placeholderColorWhite,
    borderRightWidth: 1,
  },
  itemImage: {
    height: 105 * ratioH,
    width: 105 * ratioH,
    borderRadius: 7,
  },
});

const Card = ({ date, content, source }) => (
  <View style={style.container}>
    <View style={style.col}>
      <Custom.Text>{date}</Custom.Text>
    </View>
    <View style={style.col}>
      <Custom.Text>{content}</Custom.Text>
    </View>
    <View
      style={[
        style.col,
        { borderRightWidth: 0, borderRightColor: 'transparent' },
      ]}
    >
      <Image source={{ uri: source }} style={style.itemImage} />
    </View>
  </View>
);

Card.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  source: PropTypes.any.isRequired, // eslint-disable-line
};

export default connect()(Card);
