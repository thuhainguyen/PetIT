import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as d from '../../utilities/Tranform';
import { colors, fonts } from '../../themes';

const input = StyleSheet.create({
  container: {
    width: 260 * d.ratioW,
    height: 46 * d.ratioH,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 23 * d.ratioH,
    color: colors.white,
    paddingLeft: 31 * d.ratioW,
    fontFamily: `${fonts.SegoeUI}, ${fonts.SegUI}`,
  },
});

type Props = {
  style: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  underlineColorAndroid: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
};

export default class Index extends PureComponent<Props> {
  static defaultProps = {
    style: StyleSheet.create({}),
    defaultValue: '',
    underlineColorAndroid: 'transparent',
    placeholderTextColor: colors.placeholderColorWhite,
    returnKeyType: 'default',
  };
  state = {};
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        style={[input.container, this.props.style]}
        onChangeText={this.props.onChangeText}
        defaultValue={this.props.defaultValue}
        underlineColorAndroid={this.props.underlineColorAndroid}
        returnKeyType={this.props.returnKeyType}
      />
    );
  }
}
