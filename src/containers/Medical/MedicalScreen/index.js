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
import { Pet, User } from '../../../dataType';
import { getPetData } from '../../../actions';
import dataPet from './data';

type Props = {
  navigation: Object,
  getPetData: Function,
  user: User,
  // dataPet: Object,
};

class MedicalScreen extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getPetData(this.props.user.id);
  }
  render() {
    // const { dataPet } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={style.header}>
          <SearchComponent style={{ elevation: 5 }} />
        </View>
        <ScrollView style={{ flex: 1 }}>
          {Object.keys(dataPet).map((key) => (
            <View style={style.top} key={key}>
              <ImageBackground
                style={style.vTitle}
                source={images.backgroundButton}
              >
                <Custom.Text style={style.title}>
                  {dataPet[key].name}
                </Custom.Text>
              </ImageBackground>
              <View style={style.view}>
                {dataPet[key].data.map((item: Pet) => (
                  <ImageBackground
                    key={item.key}
                    source={{ uri: item.photoUrl }}
                    style={style.petCard}
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
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.fetchPetData.dataPet);
  return {
    user: state.user.user,
    dataPet: state.fetchPetData.dataPet,
  };
};

export default connect(
  mapStateToProps,
  {
    getPetData,
  },
)(MedicalScreen);
