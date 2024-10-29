import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({title, onIconPress, onTextPress, heading}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
       <Icon
          name="arrowleft"
          size={30}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{heading}</Text>
      <TouchableOpacity onPress={onTextPress} style={styles.iconContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

