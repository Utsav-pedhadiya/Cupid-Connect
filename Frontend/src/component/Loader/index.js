import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
     <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Loader;
