import React, { PureComponent } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import style from './style';
import { Property, Button } from '../Component';
import { Custom } from '../../../components';
import { Pet } from '../../../dataType';

type Props = {
  navigation: Object,
};

class PetDetail extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data: Pet = this.props.navigation.getParam('pet', {});
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#eeeeee' }}
      >
        <View style={style.header}>
          <View style={{ elevation: 5 }}>
            <Image source={{ uri: data.photoUrl }} style={style.avatarPet} />
          </View>

          <View style={style.profilePet}>
            <Property name="Tên" content={data.petName} />
            <Property name="Ngày sinh" content={`${data.birthDay}`} />
            <Property name="Giống" content={data.species} />
            <Property name="Giới tính" content={data.gender} />
            <Property name="Màu Lông" content={data.hairColor} />
            <Property name="Số Microship" content={data.microship} />
          </View>
        </View>
        <View style={style.funcView}>
          <Button
            onPress={() =>
              this.props.navigation.navigate('Album', { pet: data })
            }
            name="Album"
            style={style.funcBtn}
          />
          <Button
            onPress={() =>
              this.props.navigation.navigate('Diary', { pet: data })
            }
            name="Nhật ký thú ý"
            style={style.funcBtn}
          />
          <Button
            onPress={() => this.props.navigation.navigate('LichChungNgua')}
            name="Lịch chủng ngừa"
            style={style.funcBtn}
          />
          <Button
            onPress={() => this.props.navigation.navigate('LichTayGiun')}
            name="Lịch tẩy giun và trị ve"
            style={style.funcBtn}
          />
        </View>
        <View style={style.infoView}>
          <Custom.Text style={style.title}>Thông tin sức khỏe</Custom.Text>
          <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
            <View style={style.item}>
              <View style={style.leftItem} />
              <Image source={{ uri: data.photoUrl }} style={style.itemImage} />
            </View>
            <View style={style.item}>
              <View style={style.leftItem} />
              <Image source={{ uri: data.photoUrl }} style={style.itemImage} />
            </View>
            <View style={style.item}>
              <View style={style.leftItem} />
              <Image source={{ uri: data.photoUrl }} style={style.itemImage} />
            </View>
            <View style={style.item}>
              <View style={style.leftItem} />
              <Image source={{ uri: data.photoUrl }} style={style.itemImage} />
            </View>
            <View style={{ marginBottom: 40 }} />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default connect()(PetDetail);
