import React, { PureComponent } from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import style from './style';
import { Custom } from '../../../components';
import { TextInput } from '../../../components/CustomComponent';
import { colors, icon } from '../../../themes';
import { verticalScale } from '../../../utilities/Tranform';

type Props = {
  navigation: Object,
};

class AddDiary extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.pet = props.navigation.getParam('pet', {});
    this.state = {
      sicks: [
        {
          createtime: null,
          sickContent: null,
        },
      ],
    };
  }
  addSick = () => {
    const tmp = {
      createtime: null,
      sickContent: null,
    };
    this.setState({
      sicks: [...this.state.sicks, tmp],
    });
  };
  render() {
    return (
      <View style={style.container}>
        <Custom.Text style={style.title}>Thêm tiểu sử bệnh</Custom.Text>
        <View style={style.form}>
          {this.state.sicks.map((sick, index) => (
            <View style={style.formItem} key={index.toString()}>
              <TouchableOpacity style={style.btnInput}>
                <Custom.Text style={style.placeHolder}>
                  Chọn ngày điều trị
                </Custom.Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Nhập bệnh của thú cưng"
                placeholderTextColor={colors.defaultOpacity}
                style={[style.btnInput, style.placeHolder]}
              />
            </View>
          ))}
          <TouchableOpacity
            style={[
              style.btnInput,
              { height: verticalScale(76), alignItems: 'center' },
            ]}
            onPress={this.addSick}
          >
            <ImageBackground source={icon.add} style={style.imageAdd} />
          </TouchableOpacity>
          <View style={style.bottom}>
            <TouchableOpacity style={style.btnBottom}>
              <Custom.Text style={style.txtBtn}>Hoàn tất</Custom.Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(AddDiary);
