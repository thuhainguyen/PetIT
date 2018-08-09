import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { fonts } from '../../themes';

type Props = {
  style: PropTypes.any,
  onPress: PropTypes.any,
  children: PropTypes.any,
};

const style = StyleSheet.create({
  text: {
    fontFamily: `${fonts.Helvetica}, ${fonts.HelveticaLight}`,
    padding: 0,
    fontSize: 15,
  },
});

export default class TextCustom extends PureComponent<Props> {
  state = {};
  render() {
    return (
      <Text {...this.props} style={[style.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}
