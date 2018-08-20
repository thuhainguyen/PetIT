import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import style from './style';
import { Custom } from '../../../components';

type Props = {
  navigation: Object,
};

class Album extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.pet = props.navigation.getParam('pet', {});
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Album of {this.pet.petName}</Text>
        <Custom.Text onPress={() => this.props.navigation.goBack()}>
          Back
        </Custom.Text>
      </View>
    );
  }
}

export default connect()(Album);
