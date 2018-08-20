import React, { PureComponent } from 'react';
import { View, Image, TextInput, ViewPropTypes } from 'react-native';
// import PropTypes from 'prop-types';
import style from './style';
import { icon, colors } from '../../themes';

type Props = {
  style: ViewPropTypes.style,
};

class SearchComponent extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[style.container, this.props.style]}>
        <View style={style.iconView}>
          <Image source={icon.search} style={style.icon} />
        </View>
        <View style={style.inputView}>
          <TextInput
            placeholder="Tìm kiếm nhanh"
            placeholderTextColor={colors.textOpacity6}
            underlineColorAndroid="transparent"
            style={style.input}
          />
        </View>
      </View>
    );
  }
}
SearchComponent.propTypes = {};

export default SearchComponent;
