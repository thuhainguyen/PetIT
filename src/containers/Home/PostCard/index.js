import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { post, user } from '../../../constants/dataType';
import { Custom } from '../../../components';
import { icon } from '../../../themes';
import style from './style';

type Props = {
  item: post,
  userItem: user,
  imageOnPress: Function,
  avatarOnPress: Function,
};

class Index extends PureComponent<Props> {
  render() {
    const { item, userItem } = this.props;
    return (
      <View style={[style.postContainer, { height: item.height }]}>
        <TouchableOpacity
          onPress={this.props.imageOnPress}
          activeOpacity={0.85}
          style={{ flex: 1 }}
        >
          <Image
            resizeMode="stretch"
            source={{ uri: item.photoUrl }}
            style={{
              flex: 1,
            }}
          />
        </TouchableOpacity>
        <View style={style.bottomPost}>
          <TouchableOpacity
            style={style.btnPost}
            onPress={this.props.avatarOnPress}
          >
            <Image style={style.avatar} source={{ uri: userItem.photoUrl }} />
          </TouchableOpacity>
          <TouchableOpacity style={style.btnPost}>
            <Image source={icon.whiteHeart} />
            <Custom.Text style={style.postTxt}>{item.react}</Custom.Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnPost}>
            <Image source={icon.comment} />
            <Custom.Text style={style.postTxt}>
              {item.comment.length}
            </Custom.Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnPost}>
            <Image source={icon.moreOptions} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Index;
