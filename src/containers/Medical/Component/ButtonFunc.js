import React from 'react';
import { ViewPropTypes, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Custom } from '../../../components';
import { images } from '../../../themes';
import { horizontalScale } from '../../../utilities/Tranform';

const Button = ({ style, name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <ImageBackground
      source={images.backgroundButton}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Custom.Text
        style={{
          color: 'white',
          fontWeight: '600',
          textAlign: 'center',
          fontSize: horizontalScale(13, 1.2),
        }}
      >
        {name}
      </Custom.Text>
    </ImageBackground>
  </TouchableOpacity>
);

Button.propTypes = {
  style: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  style: {},
};

export default Button;
