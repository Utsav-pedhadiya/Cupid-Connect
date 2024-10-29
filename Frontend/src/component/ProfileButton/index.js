import React from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const ProfileButton = ({text,onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.package} >
          <Text style={styles.name}>{text}</Text>
          <Icon
              name="chevron-right"
              size={20}
              color="#F63876"
              style={styles.Icon}
            />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButton;
