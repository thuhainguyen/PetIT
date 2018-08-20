import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import style from './style';
import { Custom } from '../../../components';
import { colors, icons } from '../../../themes';

class PostDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const post = this.props.navigation.getParam('post', {});
    console.log('post: ', post);
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          hidden={false}
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.2, 1]}
          colors={[colors.default, colors.defaultOpacity]}
          style={style.header}
        >
          <View style={style.vTitle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ padding: 10 }}
            >
              <Image source={icons.back} />
            </TouchableOpacity>
            <Custom.Text
              style={{ color: colors.white, fontSize: 15, marginLeft: 10 }}
            >
              Bình luận
            </Custom.Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

PostDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(PostDetail);
