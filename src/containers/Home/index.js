import React, { PureComponent } from 'react';
import { View, Text, RefreshControl } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-native-masonry-layout';
// import style from './style';
// import images from '../../themes/Icons';

class Home extends PureComponent {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    this.masonry.addItems([
      {
        key: '12',
        text: 'text1',
        height: 210,
        backgroundColor: 'red',
      },
      {
        key: '13',
        text: 'text1',
        height: 150,
        backgroundColor: 'yellow',
      },
      {
        key: '14',
        text: 'text1',
        height: 170,
        backgroundColor: 'red',
      },
      {
        key: '15',
        text: 'text1',
        height: 200,
        backgroundColor: 'yellow',
      },
      {
        key: '16',
        text: 'text1',
        height: 150,
        backgroundColor: 'red',
      },
      {
        key: '17',
        text: 'text1',
        height: 280,
        backgroundColor: 'blue',
      },
      {
        key: '18',
        text: 'text1',
        height: 210,
        backgroundColor: 'lightgreen',
      },
      {
        key: '19',
        text: 'text1',
        height: 300,
        backgroundColor: 'orange',
      },
      {
        key: '20',
        text: 'text1',
        height: 100,
        backgroundColor: 'red',
      },
      {
        key: '1',
        text: 'text1',
        height: 200,
        backgroundColor: 'violet',
      },
      {
        key: '2',
        text: 'text1',
        height: 250,
        backgroundColor: 'black',
      },
      {
        key: '3',
        text: 'text1',
        height: 220,
        backgroundColor: 'green',
      },
    ]);
  }
  randomId = (len: number): string => {
    const charSet =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < len; i += 1) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomId += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomId;
  };
  randomColor = (): string => {
    const charSet = '0123456789';
    let randomColor = '#';
    for (let i = 0; i < 6; i += 1) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomColor += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomColor;
  };
  randomHeight = () => Math.floor(Math.random() * 250) + 120;
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.masonry.addItems([
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
      {
        key: this.randomId(20),
        text: 'text1',
        height: this.randomHeight(),
        backgroundColor: this.randomColor(),
      },
    ]);
    this.setState({ refreshing: false });
  };
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
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          let paddingToBottom = 300;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          if (
            e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            this._onRefresh();
          }
        }}
        renderItem={(item) => (
          <View
            style={{
              backgroundColor: item.backgroundColor,
              height: item.height,
              margin: 3,
            }}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Home);
