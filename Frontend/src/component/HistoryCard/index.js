import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const HistoryCard = ({Name, Time, Iconename, content, read, onPress}) => {
  const card = read ? styles.read : null;

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={[styles.column, styles.leftAlign]}>
          <Icon
            name={Iconename}
            size={30}
            color="#fc3876"
            style={styles.image}
          />
          <View style={[styles.column2, styles.leftAlign]}>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
          <View style={[styles.column, styles.rightAlign]}>
            <Text style={styles.time}>{Time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HistoryCard;
