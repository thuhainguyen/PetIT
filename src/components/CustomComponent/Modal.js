import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../themes';
import * as d from '../../utilities/Tranform.js';

type Props = {
  children: PropTypes.any,
  style: PropTypes.any,
};

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
  },
  view: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 25 * d.ratioH,
    backgroundColor: colors.placeholderColorWhite,
  },
});

export default class Modal extends PureComponent<Props> {
  state = {
    isShow: false,
    animation: new Animated.Value(0),
  };

  open = () => {
    this.setState(
      {
        isShow: true,
      },
      () => {
        Animated.timing(this.state.animation, {
          duration: 170,
          toValue: 1,
        }).start();
      },
    );
  };

  close = () => {
    Animated.timing(this.state.animation, {
      duration: 170,
      toValue: 0,
    }).start(() => {
      this.setState({
        isShow: false,
      });
    });
  };

  render() {
    return this.state.isShow ? (
      <View style={style.container}>
        <TouchableOpacity
          style={style.view}
          activeOpacity={1}
          onPress={this.close}
        />
        <Animated.View
          style={[
            this.props.style,
            {
              transform: [
                {
                  translateY: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [d.windowSize.height, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {this.props.children}
        </Animated.View>
      </View>
    ) : null;
  }
}
