import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

class StarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5,
    };
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating,
    });
  };

  render() {
    return (
      <View style={this.props.style}>
        <StarRating
          disabled={false}
          halfStarEnabled
          maxStars={this.props.maxStars}
          rating={this.state.starCount}
          selectedStar={this.onStarRatingPress}
          fullStarColor="yellow"
        />
      </View>
    );
  }
}

StarComponent.propTypes = {
  style: PropTypes.objectOf,
  maxStars: PropTypes.number,
};

StarComponent.defaultProps = {
  style: {},
  maxStars: 5,
};

export default StarComponent;
