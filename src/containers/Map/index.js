import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { SearchComponent, ListProduct } from '../../components';

import mapStyles from './mapStyle';
import style from './style';
// import images from '../../themes/Icons';

class MapScreen extends PureComponent {
  static navigationOptions = {
    showLabel: false,
    title: 'Maps',
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 21.025817,
        longitude: 105.800344,
        latitudeDelta: 0.0101,
        longitudeDelta: 0.0104,
      },
      error: null, // eslint-disable-line
    };
    this._marker = [];
    this.markers = [];
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    /* eslint-disable */
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position: ', position.coords);
        const { longitude, latitude } = position.coords;
        this.setState({
          region: {
            ...this.state.region,
            longitude,
            latitude,
          },
        });
      },
      (error) => {
        console.log('error: ', error);
      },
    );
    /* eslint-enable */
  };
  render() {
    return (
      <View style={style.container}>
        <MapView
          region={this.state.region}
          ref={(ref) => {
            this.map = ref;
          }}
          showsUserLocation
          showsMyLocationButton={this.props.showButton}
          followsUserLocation
          customMapStyle={mapStyles}
          style={{ flex: 1 }}
          zoomEnabled
          minZoomLevel={14}
          maxZoomLevel={18}
        />
        <SearchComponent />
        <ListProduct
          navigation={this.props.navigation}
          style={style.viewCard}
        />
      </View>
    );
  }
}
MapScreen.propTypes = {
  showButton: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

MapScreen.defaultProps = {
  showButton: false,
};

export default connect()(MapScreen);
