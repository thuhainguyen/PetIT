import React from 'react';
import {
  ViewPropTypes,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Custom } from '../../../components';
import { images, icons } from '../../../themes';
import { ratioH, ratioW } from '../../../utilities/Tranform';

const Header = ({ style, title, onLeftPress }) => (
  <View style={style}>
    <ImageBackground
      source={images.backgroundButton}
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity
        style={{
          marginLeft: 5 * ratioW,
          paddingHorizontal: 10 * ratioW,
          paddingVertical: 7 * ratioH,
        }}
        activeOpacity={0.75}
        onPress={onLeftPress}
      >
        <Image source={icons.back} />
      </TouchableOpacity>
      <View
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
            fontSize: 19,
          }}
        >
          {title}
        </Custom.Text>
      </View>
    </ImageBackground>
  </View>
);

Header.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  onLeftPress: PropTypes.func.isRequired,
};

Header.defaultProps = {
  style: {
    height: 50 * ratioH,
    width: '100%',
    elevation: 5,
  },
};

export default Header;
