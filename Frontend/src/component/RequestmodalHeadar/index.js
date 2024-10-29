import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const RequestmodalHeadar = ({
  name,
  SIcon,
  buttonName,
  onPress
}) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container2}>
      <View style={styles.SColoum}>
        <Image source={SIcon} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{buttonName}</Text>
 </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequestmodalHeadar;
