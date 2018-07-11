import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { SearchComponent } from '../../components';
import mapStyles from './mapStyle';
import style from './style';
// import images from '../../themes/Icons';

class Map extends PureComponent {
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
    // this.getCurrentLocation();
  }

  setRegion = (region) => {
    this.map.animateToCoordinate(region, 10000);
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( // eslint-disable-line
      (position) => {
        console.log('position: ', position.coords);
        const { longitude, latitude } = position.coords;
        this.setState({
          region: {
            ...this.state.region,
            longitude,
            latitude,
          },
        }, () => {
          this.setRegion({longitude, latitude});
        });
      },
      (error) => {
        console.log('error: ', error);
      },
    );
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
          followsUserLocation
          customMapStyle={mapStyles}
          style={{ flex: 1 }}
          zoomEnabled
          minZoomLevel={14}
          maxZoomLevel={18}
        />
        <SearchComponent />
        <View style={{position: 'absolute', top: 100, right: 50, height: 50, width: 100, backgroundColor: 'red'}}>
          <Text onPress={this.getCurrentLocation}>
            Location
          </Text>
        </View>
      </View>
    );
  }
}
Map.propTypes = {
  // navigation: PropTypes.shape({
  //   navigate: PropTypes.func.isRequired,
  //   goBack: PropTypes.func.isRequired,
  //   dispatch: PropTypes.func.isRequired
  // }).isRequired
};

export default connect()(Map);
