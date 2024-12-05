import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import ProfileButton from '../ProfileButton';
import constant from '../../constants/constant';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';

const ProfileHeader = ({name, buttontitle, monumber, modalStyle, onPress}) => {
  const {navigate} = useNavigation();
  const {t, i18n} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const newStyle = modalStyle ? styles.modalStyle : null;
  return (
    <View style={[styles.container2, newStyle,{height: screenWidth * 0.7}]}>
      <View style={styles.fColoum}>
        <TouchableOpacity onPress={onPress}>
          <Icon3 name="trash-o" size={25} color="black" style={[styles.Icon,{marginRight: screenWidth * 0.07}]} />
        </TouchableOpacity>
      </View>

      <View style={styles.SColoum}>
        <Icon3
          name="user-circle-o"
          size={90}
          color="#3B3B3B"
          style={styles.Simage}
        />
        <Text style={styles.name}>{t(name)}</Text>
        <Text style={styles.moNumber}>{t(monumber)}</Text>
        <ProfileButton
          text={t(buttontitle)}
          source={constant.imagePath.rightRedArrow}
          onPress={() => {
            navigate(routeNames.SUBSCRIPTIONHISTORY);
          }}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
