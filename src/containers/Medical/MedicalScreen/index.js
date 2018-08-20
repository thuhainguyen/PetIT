import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import style from './style';
import { images } from '../../../themes';
import { SearchComponent, Custom } from '../../../components';
import { dataCat, dataDog, dataFish } from './data';
import { randomId } from '../../../utilities/random';

type Props = {
  navigation: Object,
};

class MedicalScreen extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={style.header}>
          <SearchComponent style={{ elevation: 5 }} />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={style.top}>
            <ImageBackground
              style={style.vTitle}
              source={images.backgroundButton}
            >
              <Custom.Text style={style.title}>Chó</Custom.Text>
            </ImageBackground>
            <View style={style.view}>
              {dataDog.map((item) => (
                <View style={style.petCard} key={randomId(20)}>
                  <ImageBackground
                    source={{ uri: item.photoUrl }}
                    style={{ flex: 1 }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('PetDetail', {
                          pet: item,
                        })
                      }
                      style={{ flex: 1 }}
                    >
                      <Text>{item.petName}</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              ))}
            </View>
          </View>
          <View style={style.top}>
            <ImageBackground
              style={style.vTitle}
              source={images.backgroundButton}
            >
              <Custom.Text style={style.title}>Mèo</Custom.Text>
            </ImageBackground>
            <View style={style.view}>
              {dataCat.map((item) => (
                <ImageBackground
                  key={randomId(20)}
                  source={{ uri: item.photoUrl }}
                  style={style.petCard}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('PetDetail', { pet: item })
                    }
                    style={{ flex: 1 }}
                  >
                    <Text>{item.petName}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              ))}
            </View>
          </View>
          <View style={style.top}>
            <ImageBackground
              style={style.vTitle}
              source={images.backgroundButton}
            >
              <Custom.Text style={style.title}>Cá</Custom.Text>
            </ImageBackground>
            <View style={style.view}>
              {dataFish.map((item) => (
                <ImageBackground
                  key={randomId(20)}
                  source={{ uri: item.photoUrl }}
                  style={style.petCard}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('PetDetail', { pet: item })
                    }
                    style={{ flex: 1 }}
                  >
                    <Text>{item.petName}</Text>
                  </TouchableOpacity>
                </ImageBackground>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(MedicalScreen);
