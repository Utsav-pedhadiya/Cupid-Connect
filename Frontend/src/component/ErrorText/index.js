import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const ErrorText = ({title, IconName}) => {
  return (
    <View style={styles.container}>
        <Icon name={IconName} size={25} color="red" style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default ErrorText;
