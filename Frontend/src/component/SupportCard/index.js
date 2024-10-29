import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const SupportCard = ({Name, Information, source, IconName, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.maincontainer}>
            <Icon name={IconName} size={25} color="#FC3876" style={styles.image} />
            <View style={styles.datacontainer}>
              <Text style={styles.name}>{Name}</Text>
              <Text style={styles.Information}>{Information}</Text>
            </View>
          </View>

          <View style={styles.user}>
            <View style={styles.horizontalLine} />
          </View>
          <Icon
              name="chevron-right"
              size={25}
              color="black"
              style={styles.image2}
            />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SupportCard;
