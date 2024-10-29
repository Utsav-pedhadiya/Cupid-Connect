import React from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
const ViewProfileCard = ({
  Name,
  Name2,
  Time,
  onPressProfile,
  onPressReject,
  onPressAccept,
  read,
  Iconename
}) => {
  const card = read ? styles.read : null;
  return (
    <View style={[styles.container,card]}>
      <View style={styles.maincontainer}>
        <Icon
              name={Iconename}
              size={30}
              color="#fc3876"
              style={styles.image}
            />
        <View style={styles.datacontainer}>
          <View style={styles.maindata}>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.time}>{Time}</Text>
          </View>

          <View style={styles.datacontainer2}>
            <Text style={styles.name2}>{Name2}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.horizontalLine} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onPressProfile}>
            <Text style={styles.text}>View Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressReject} style={styles.button2}>
            <Text style={styles.text}>Reject</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressAccept}>
            <Text style={styles.text}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewProfileCard;
