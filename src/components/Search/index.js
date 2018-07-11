import React, { PureComponent } from 'react';
import { View, Image, TextInput } from 'react-native';
// import PropTypes from 'prop-types';
import style from './style';
import { Icon, Colors } from '../../themes';

class SearchComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.iconView}>
          <Image
            source={Icon.search}
            style={style.icon}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            placeholder="Tìm kiếm nhanh"
            placeholderTextColor={Colors.textOpacity6}
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
