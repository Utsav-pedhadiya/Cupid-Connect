import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const HeadingText = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeadingText;
