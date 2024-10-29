import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import constant from '../../constants/constant';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure the correct import path is used

const RequestContactCard = ({
  name,
  time,
  mobileNumber,
  description,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Icon name={'user-circle-o'} size={40} color="black" style={styles.icon} />
          <View style={styles.mainColumn}>
            <View style={[styles.row, styles.headerRow]}>
              <Text style={styles.content}>{name}</Text>
              <Text style={styles.time}>{time}</Text>
            </View>
            <View style={styles.rowtwo}>
              <Image source={constant.imagePath.phone} style={styles.phoneIcon} />
              <Text style={styles.mobileNumber}>{mobileNumber}</Text>
            </View>
            <View style={styles.rowthree}>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default RequestContactCard;
