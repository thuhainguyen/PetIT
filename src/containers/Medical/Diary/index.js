import React, { PureComponent } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import style from './style';
import { Header } from '../Component';
import Card from './Card';
import { Custom } from '../../../components';
import { icon } from '../../../themes';

type Props = {
  navigation: Object,
};

class Diary extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.pet = props.navigation.getParam('pet', {});
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.onGetData();
  }
  onGetData = () => {
    const data = [
      {
        date: '10/8/2018',
        content: 'Tiêm mũi 1',
        source: this.pet.photoUrl,
      },
      {
        date: '11/8/2018',
        content: 'Tiêm mũi 2',
        source: this.pet.photoUrl,
      },
      {
        date: '12/8/2018',
        content: 'Tiêm mũi 3',
        source: this.pet.photoUrl,
      },
    ];
    this.setState({
      data,
    });
  };

  addData = (value) => {
    const data = [...this.state.data, value];
    this.setState({
      data,
    });
  };
  render() {
    return (
      <View style={style.container}>
        <Header
          title="Tiểu Sử Bệnh"
          onLeftPress={() => this.props.navigation.goBack()}
        />
        <View style={{ flex: 1 }}>
          <View style={style.title}>
            <Custom.Text style={style.txtTitle}>Ngày</Custom.Text>
            <Custom.Text style={style.txtTitle}>Điều trị</Custom.Text>
            <Custom.Text style={[style.txtTitle, { borderRightWidth: 0 }]}>
              Hình ảnh
            </Custom.Text>
          </View>
          <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
            {this.state.data.map((item) => (
              <Card
                key={item.date}
                date={item.date}
                content={item.content}
                source={item.source}
              />
            ))}
            <View style={style.scrollFooter}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AddDiary', {
                    callback: this.addData,
                  })
                }
              >
                <Image source={icon.add} style={style.imageAdd} />
              </TouchableOpacity>
              <Custom.Text style={style.footerTxt}>
                Thêm tiểu sử bệnh
              </Custom.Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect()(Diary);
