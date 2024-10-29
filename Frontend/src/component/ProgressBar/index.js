//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import constant from '../../constants/constant';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 7,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: constant.colors.pinkBorder,
    borderRadius: 5,
  },
});

export default ProgressBar;
