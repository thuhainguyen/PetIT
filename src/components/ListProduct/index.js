import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import { icon } from '../../themes';
import style from './style';

class ListProduct extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          content: 'Thức ăn và đồ chơi thú cưng',
          icon: icon.foodIcon,
        },
        {
          content: 'Spa thú cưng',
          icon: icon.spaIcon,
        },
        {
          content: 'Bệnh viện thú y',
          icon: icon.hospitalIcon,
          iconStyle: {
            width: 54,
            height: 36,
          },
        },
        {
          content: 'Vận chuyển',
          icon: icon.transformIcon,
          iconStyle: {
            width: 66,
            height: 31,
          },
        },
      ],
    };
  }

  render() {
    return (
      <FlatList
        style={this.props.style}
        data={this.state.data}
        keyExtractor={(item, index) => item.content + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            content={item.content}
            icon={item.icon}
            key={item.content}
            iconStyle={item.iconStyle}
          />
        )}
      />
    );
  }
}
ListProduct.propTypes = {
  style: PropTypes.any, // eslint-disable-line
};

ListProduct.defaultProps = {
  style: style.container,
};

export default ListProduct;
