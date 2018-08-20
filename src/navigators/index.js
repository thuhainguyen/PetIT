import React from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigator from './rootNavigator';
import { addListener } from '../utilities/redux';

class AppWithNavigationState extends React.PureComponent {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }
  onBackButtonPressAndroid = () => {
    const { dispatch, navigation } = this.props;
    const routeTab = navigation.routes[1];
    if (routeTab.index === 0) {
      const routeHome = routeTab.routes[0];
      if (routeHome.index === 0) {
        const { scrollToTop } = routeHome.routes[0].params;
        return scrollToTop();
      }
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, navigation } = this.props;
    return (
      <RootNavigator
        navigation={{
          dispatch,
          state: navigation,
          addListener,
        }}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppWithNavigationState);
