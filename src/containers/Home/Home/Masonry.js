import React from 'react';
import { FlatList, ScrollView, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
/* eslint-disable */
class Item extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this.props.onLayout}>
        {this.props.renderItem(this.props.item)}
      </View>
    );
  }
}

class Column extends React.PureComponent {
  static propTypes = {
    keyExtractor: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      data: [],
    };
  }

  clear() {
    this.setState({ data: [], height: 0 });
  }

  render() {
    return (
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }

  getHeight() {
    return this.state.height;
  }

  addItems(items) {
    this.setState({ data: [...this.state.data, ...items] });
  }

  renderItem({ item }) {
    return (
      <Item
        renderItem={this.props.renderItem}
        item={item}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          this.state.height = this.state.height + height;
          this.setState({ height: this.state.height });
          item.onLayout && item.onLayout();
        }}
      />
    );
  }
}
type Props = {
  columns: PropTypes.number,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  renderItem: PropTypes.func,
  keyExtractor: PropTypes.func,
  header: PropTypes.any,
};
export default class Masonry extends React.PureComponent<Props> {
  static defaultProps = {
    columns: 2,
  };

  constructor(props) {
    super(props);
    const columns = [];
    for (let i = 0; i < props.columns; i++) {
      columns.push(null);
    }
    this.state = {
      columns,
    };
    this.itemQueue = [];
  }

  clear() {
    this.state.columns.forEach((col) => col.clear());
  }

  addItems(items) {
    if (items) {
      if (this.itemQueue.length > 0) {
        this.itemQueue = this.itemQueue.concat(items);
      } else {
        this.itemQueue = this.itemQueue.concat(items);
        this.addItems();
      }
    } else {
      if (this.itemQueue.length > 0) {
        const item = this.itemQueue.shift();
        this.addItem(item, () => this.addItems());
      }
    }
  }

  addItemsWithHeight(items) {
    // 生成临时 Column 映射
    const columns = this.sortColumns().map((col) => {
      return {
        column: col,
        height: col.getHeight(),
        data: [],
      };
    });

    // 逐个分配 Item 到最小的 Column 中
    items.forEach((item) => {
      const col = columns.sort((a, b) => a.height - b.height)[0];
      col.data.push(item);
      col.height += item.height;
    });

    // 批量添加 Column 的 Items
    columns.forEach((col) => {
      col.column.addItems(col.data);
    });
  }

  /**
   * 对所有列按高度进行排序
   * @returns {Array}
   */
  sortColumns() {
    return this.state.columns.sort((a, b) => a.getHeight() - b.getHeight());
  }

  addItem(item, callback) {
    const minCol = this.sortColumns()[0];
    item.onLayout = callback;
    minCol.addItems([item]);
  }
  scrollToTop = () => {
    this.scroll.scrollTo({ y: 0, x: 5, animated: true });
  };
  render() {
    return (
      <ScrollView
        {...this.props}
        ref={(node) => {
          this.scroll = node;
        }}
      >
        {this.props.header}
        <View style={[{ flexDirection: 'row' }, this.props.containerStyle]}>
          {this.state.columns.map((col, index) => {
            return (
              <Column
                key={index}
                ref={(ref) => (this.state.columns[index] = ref)}
                keyExtractor={this.props.keyExtractor}
                renderItem={this.props.renderItem.bind(this)}
              />
            );
          })}
        </View>
        {this.props.footer}
      </ScrollView>
    );
  }
}
