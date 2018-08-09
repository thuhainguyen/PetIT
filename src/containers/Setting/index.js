import React, { PureComponent } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import firebase from 'react-native-firebase';

class Setting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signOut = async () => {
    await AsyncStorage.removeItem('user');
    const resetAction = NavigationActions.navigate({
      routeName: 'Auth',
      action: NavigationActions.navigate({ routeName: 'Login0' }),
    });
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Text>Setting</Text>
        <Text
          style={{
            margin: 5,
            padding: 7,
          }}
          onPress={this.signOut}
        >
          Logout
        </Text>
      </View>
    );
  }
}
Setting.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Setting);
