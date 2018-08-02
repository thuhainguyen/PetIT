import React, { PureComponent } from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { PresentCard } from '../../components';
import style from './style';

type Props = {};

export default class Presentation extends PureComponent<Props> {
  state = {
    index: 1,
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar hidden />
        <ScrollView style={style.scrollView}>
          <PresentCard style={{ backgroundColor: '#665EFF' }}>
            <Image />
          </PresentCard>
        </ScrollView>
        <View style={style.vIndex}>
          <View
            style={[
              style.indexItem,
              {
                backgroundColor: this.state.index === 1 ? '#2AB9B9' : '#78849E',
              },
            ]}
          />
          <View
            style={[
              style.indexItem,
              {
                backgroundColor: this.state.index === 2 ? '#2AB9B9' : '#78849E',
              },
            ]}
          />
          <View
            style={[
              style.indexItem,
              {
                backgroundColor: this.state.index === 3 ? '#2AB9B9' : '#78849E',
              },
            ]}
          />
          <View
            style={[
              style.indexItem,
              {
                backgroundColor: this.state.index === 4 ? '#2AB9B9' : '#78849E',
              },
            ]}
          />
        </View>
        <TouchableOpacity style={style.btn}>
          <Text>Tiếp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
