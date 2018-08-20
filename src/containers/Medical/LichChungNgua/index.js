import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import style from './style';
import { Custom } from '../../../components';

type Props = {
  petName: string,
  navigation: Object,
};

class LichChungNgua extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Lịch chủng ngừa {this.props.petName}</Text>
        <Custom.Text onPress={() => this.props.navigation.goBack()}>
          Back
        </Custom.Text>
      </View>
    );
  }
}

export default connect()(LichChungNgua);
