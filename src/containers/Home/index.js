import React, { PureComponent } from 'react';
import { View, RefreshControl, Image, BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { post, user } from '../../constants/dataType';
import { PostCard, Masonry } from '../../components';
import { randomId } from '../../utilities/random';
import style from './style';
import data from './data';

const PADDING_BOTTOM = 500;

class Home extends PureComponent {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const datas = data.post.map((item) => {
      const tmp = item;
      const key = randomId(20);
      tmp.key = key;
      return tmp;
    });
    this.masonry.addItems(datas);
    this.props.navigation.setParams({
      scrollToTop: this.scrollToTop,
    });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  offset = 0;
  handleBackPress = () => {
    if (this.offset > 0) {
      this.masonry.scrollToTop();
      return true;
    }
    return false;
  };

  refresh = () => {
    console.log('refresh');
    this.setState({ showMore: true }, () => {
      const datas = data.post.map((item) => {
        const tmp = item;
        const key = randomId(20);
        tmp.key = key;
        return tmp;
      });
      this.masonry.addItems(datas);
      this.setState({ showMore: false });
    });
  };
  findUser = (userId: string): Object => data.user[userId];
  renderTop = () => (
    <View style={{ elevation: 10 }}>
      <Image
        source={{
          uri:
            'http://spice4life.co.za/wp-content/uploads/2015/08/WFRRERGF33232.png',
        }}
        style={style.top}
      />
    </View>
  );
  render() {
    return (
      <Masonry
        ref={(node) => {
          this.masonry = node;
        }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        style={{
          backgroundColor: '#eeeeee',
          marginBottom: 50,
        }}
        header={this.renderTop()}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          let paddingToBottom = PADDING_BOTTOM;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          this.offset = e.nativeEvent.contentOffset.y;
          if (
            e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            if (!this.state.showMore) {
              this.refresh();
            }
          }
        }}
        renderItem={(item: post) => {
          const userItem: user = this.findUser(item.userId);
          return (
            <PostCard
              key={randomId(20)}
              item={item}
              imageOnPress={() =>
                this.props.navigation.navigate('PostDetail', {
                  item,
                  userItem,
                })
              }
              avatarOnPress={() =>
                this.props.navigation.navigate('Profile', { userItem })
              }
              userItem={userItem}
              navigation={this.props.navigation}
            />
          );
        }}
      />
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Home);
