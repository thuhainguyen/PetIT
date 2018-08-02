import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

type Props = {
  style: PropTypes.any,
  children: PropTypes.any,
};

export default class PresentCard extends PureComponent<Props> {
  state = {};
  render() {
    return (
      <View style={[style.container, this.props.style]}>
        <View style={style.view1}>
          <View style={style.view2} />
          <View style={style.view3} />
        </View>
        {this.props.children}
      </View>
    );
  }
}
