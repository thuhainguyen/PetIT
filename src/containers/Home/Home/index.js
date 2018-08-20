import React, { PureComponent } from 'react';
import { View, RefreshControl, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getDataPost } from '../../../actions';
import { postType } from '../../../constants/dataType';
import Masonry from './Masonry';
import PostCard from '../PostCard';
import style from './style';
import data from './data';
import { randomId, randomHeight } from '../../../utilities/random';

const PADDING_BOTTOM = 500;

type Props = {
  navigation: Object,
  // post: Array<postType>,
  getDataPost: Function,
  // isFetching: boolean,
};

class Home extends PureComponent<Props> {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    this.props.getDataPost();
    let dataTmp: postType = data.post;
    dataTmp = dataTmp.map((item) => {
      const tmp = item;
      tmp.key = randomId(20);
      tmp.height = randomHeight();
      return tmp;
    });
    this.masonry.addItems(dataTmp);
    this.props.navigation.setParams({ scrollToTop: this.handleBackPress });
  }

  offset = 0;
  handleBackPress = () => {
    if (this.offset > 5) {
      this.masonry.scrollToTop();
      return true;
    }
    return false;
  };

  refresh = async () => {};
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
      <View style={{ flex: 1 }}>
        <StatusBar
          hidden
          backgroundColor="rgba(255,255,255,0.1)"
          barStyle="dark-content"
        />
        <Masonry
          ref={(node) => {
            this.masonry = node;
          }}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refresh}
            />
          }
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
              // if (!this.state.isLoading) this.refresh();
            }
          }}
          renderItem={(item: postType) => {
            console.log('a');
            const userItem = this.findUser(item.userId);
            return (
              <PostCard
                key={item.key}
                item={item}
                imageOnPress={() =>
                  this.props.navigation.navigate('PostDetail', {
                    post: item,
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { post, isFetching } = state.fetchPostData;
  const { user } = state;
  return {
    post,
    user,
    isFetching,
  };
};

export default connect(
  mapStateToProps,
  {
    getDataPost,
  },
)(Home);
