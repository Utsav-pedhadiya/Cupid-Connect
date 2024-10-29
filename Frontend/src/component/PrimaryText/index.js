import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const PrimaryText = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default PrimaryText;
