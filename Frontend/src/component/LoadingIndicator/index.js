import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingIndicator = ({ size = 'large', color = '#FC3876' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
// P1oiA0zHAq1WeRzgwEV4tao0bEfskUqr1LiRBlAa397c604dg