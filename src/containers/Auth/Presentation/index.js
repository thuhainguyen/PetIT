import React, { PureComponent } from 'react';
import { StatusBar, View, TouchableOpacity, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PresentCard, Custom } from '../../../components';
import style from './style';
import { icons, iconComments } from '../../../themes';
import { setUser } from '../../../actions';

type Props = {
  navigation: PropTypes.Object,
  setUser: Function,
};

class Presentation extends PureComponent<Props> {
  state = {
    index: 1,
  };

  componentDidMount() {
    const user = this.props.navigation.getParam('user', {});
    this.props.setUser(user);
  }
  changeIndex(value) {
    this.swiper.scrollBy(value);
  }
  renderButton = () => {
    if (this.state.index === 0) {
      return (
        <View style={style.vBottom}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => this.changeIndex(1)}
          >
            <Image source={icons.nextButton} />
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.index === 1 || this.state.index === 2) {
      return (
        <View style={style.vBottom}>
          <TouchableOpacity
            style={[style.btn, { backgroundColor: '#A5A5A5' }]}
            onPress={() => this.changeIndex(-1)}
          >
            <Image source={icons.backButton} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btn}
            onPress={() => this.changeIndex(1)}
          >
            <Image source={icons.nextButton} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={style.vBottom}>
        <TouchableOpacity
          style={[style.btn, { backgroundColor: '#A5A5A5' }]}
          onPress={() => this.changeIndex(-1)}
        >
          <Image source={icons.backButton} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={{ color: 'white' }}>BẮT ĐẦU</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar hidden />
        <View style={style.scrollView}>
          <Swiper
            ref={(node) => {
              this.swiper = node;
            }}
            horizontal
            activeDotColor="#2AB9B9"
            dotColor="#78849E"
            dotStyle={style.indexItem}
            onIndexChanged={(index) => {
              this.setState({
                index,
              });
            }}
          >
            <View style={style.vItem}>
              <PresentCard style={style.item1}>
                <Image source={iconComments.smile} style={style.item1Image} />
                <Custom.Text style={style.item1Title}>Xin chào</Custom.Text>
                <Custom.Text style={style.txtItem1}>
                  {
                    'Tìm kiếm địa điểm, chia sẻ và lưu\ntrữ thông tin dành cho thú cưng\ncủa bạn. Petit là sự lựa chọn tuyệt\nvời dành cho bạn'
                  }
                </Custom.Text>
              </PresentCard>
            </View>
            <View style={style.vItem}>
              <PresentCard style={style.item2}>
                <Image source={iconComments.ship} style={style.item2Image} />
                <Custom.Text style={style.item2Title}>
                  Tìm kiếm siêu tốc
                </Custom.Text>
                <Custom.Text style={style.txtItem2}>
                  {
                    'Tìm kiếm địa điểm, chia sẻ và lưu\ntrữ thông tin dành cho thú cưng\ncủa bạn. Petit là sự lựa chọn tuyệt\nvời dành cho bạn'
                  }
                </Custom.Text>
              </PresentCard>
            </View>
            <View style={style.vItem}>
              <PresentCard style={style.item3}>
                <Image source={iconComments.love} style={style.item3Image} />
                <Custom.Text style={[style.item2Title, style.item3Title]}>
                  Sổ ý tế trực tuyến
                </Custom.Text>
                <Custom.Text style={style.txtItem2}>
                  {
                    'Tìm kiếm địa điểm, chia sẻ và lưu\ntrữ thông tin dành cho thú cưng\ncủa bạn. Petit là sự lựa chọn tuyệt\nvời dành cho bạn'
                  }
                </Custom.Text>
              </PresentCard>
            </View>
            <View style={style.vItem}>
              <PresentCard style={style.item4}>
                <Image source={iconComments.luxury} style={style.item4Image} />
                <Custom.Text style={[style.item2Title, style.item4Title]}>
                  Chia sẻ và khám phá
                </Custom.Text>
                <Custom.Text style={style.txtItem1}>
                  {
                    'Tìm kiếm địa điểm, chia sẻ và lưu\ntrữ thông tin dành cho thú cưng\ncủa bạn. Petit là sự lựa chọn tuyệt\nvời dành cho bạn'
                  }
                </Custom.Text>
              </PresentCard>
            </View>
          </Swiper>
        </View>
        {this.renderButton()}
      </View>
    );
  }
}

export default connect(
  null,
  {
    setUser,
  },
)(Presentation);
