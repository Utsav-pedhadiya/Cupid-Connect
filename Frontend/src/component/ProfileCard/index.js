//import liraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const ProfileCard = ({text, FLeftIcon, FRightIcon, onPress ,IconName}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.leftIcon}>
          <Icon1 name={IconName} size={30} color="black" style={styles.image} />
            <Image source={FLeftIcon} style={styles.image} />
          </View>
          <Text style={styles.cardText}>{text}</Text>
          <View style={styles.rightIcon}>
            {/* <Image source={FRightIcon} style={styles.image} /> */}
            <Icon
              name="chevron-right"
              size={25}
              color="black"
              style={styles.Icon}
            />
          </View>
        </View>
        <View>
          <View style={styles.horizontalLine} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProfileCard;
