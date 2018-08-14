import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import style from './style';
import { colors } from '../../themes';

class PostDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  backHandle = () => {
    console.log('back');
    this.props.navigation.goBack();
    return true;
  };
  render() {
    const item = this.props.navigation.getParam('item', {});
    console.log('item: ', item);
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.2, 1]}
          colors={[colors.default, colors.defaultOpacity]}
          style={style.header}
        >
          <Text onPress={this.backHandle}>back</Text>
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
