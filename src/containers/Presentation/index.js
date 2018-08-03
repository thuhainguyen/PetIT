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
import { icons, iconComments } from '../../themes';

type Props = {};

export default class Presentation extends PureComponent<Props> {
  state = {
    index: 1,
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar hidden />
        <View style={style.scrollView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PresentCard style={style.item1}>
              <Image source={iconComments.smile} style={style.item1Image} />
            </PresentCard>
            <PresentCard style={style.item2}>
              <Image source={iconComments.ship} />
            </PresentCard>
            <PresentCard style={style.item3}>
              <Image source={iconComments.love} />
            </PresentCard>
            <PresentCard style={style.item4}>
              <Image source={iconComments.luxury} />
            </PresentCard>
          </ScrollView>
        </View>

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
        <View style={style.vBottom}>
          <TouchableOpacity style={style.btn}>
            <Image source={icons.nextButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
