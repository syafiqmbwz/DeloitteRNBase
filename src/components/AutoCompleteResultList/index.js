import React, { Component } from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  AutoCompleteResultList: {
    marginHorizontal: 22,
    borderWidth: 2,
    borderColor: '#aaa',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1,
  },
  AutoCompleteResultItem: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa',
  },
  titleText: {
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
    marginBottom: 3,
    fontSize: 16,
  },
  text: {
    marginLeft: 2,
    color: '#999',
  },
});

class AutoCompleteResultList extends Component {
  renderItem({ item }) {
    return (
      <View style={styles.AutoCompleteResultItem}>
        <Text style={styles.titleText}>{item.description}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.data.length > 0 && (
          <FlatList
            {...this.props}
            contentContainerStyle={styles.AutoCompleteResultList}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

AutoCompleteResultList.defaultProps = {
  data: [],
};
export default AutoCompleteResultList;
