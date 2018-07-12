import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
// import { Colors, Icon } from '../../themes';

class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={style.container} activeOpacity={0.75}>
        <View style={style.iconView}>
          <Image source={this.props.icon} style={this.props.iconStyle} />
        </View>
        <View style={style.textView}>
          <Text style={style.text}>{this.props.content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
ProductCard.propTypes = {
  icon: PropTypes.any.isRequired, // eslint-disable-line
  content: PropTypes.string.isRequired,
  iconStyle: PropTypes.any, // eslint-disable-line
};

ProductCard.defaultProps = {
  iconStyle: style.icon,
};

export default ProductCard;
