import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import List from './list';

const Index = () => {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
