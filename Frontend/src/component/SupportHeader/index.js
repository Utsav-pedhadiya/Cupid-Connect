import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const SupportHeader = ({RightText,onPressLeftIcon, LeftIcon, heading, onPressRightText,RightIcon}) => {
  return (
    <View style={styles.container2}>
      <TouchableOpacity onPress={onPressLeftIcon}>
        {/* <Image source={LeftIcon} style={styles.image} /> */}
        <Icon
          name="arrowleft"
          size={30}
          color="black"
          style={styles.Icon}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity onPress={onPressRightText}>
        <Text style={styles.righttext}>{RightText}</Text>
        {/* <Image source={RightIcone} style={styles.image} /> */}
      </TouchableOpacity>
      <Image source={RightIcon} style={styles.image} />
    </View>
  );
};

export default SupportHeader;
