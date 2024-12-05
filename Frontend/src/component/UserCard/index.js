import React from 'react';
import {View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const UserCard = ({Name, City, Num, onPress}) => {
  const {t, i18n} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';
  return (
    <View style={[styles.container, {width: screenWidth * 0.9}]}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.datacontainer,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <View style={styles.maindata}>
            <Text style={styles.name}>{t(Name)}</Text>
          </View>

          <View style={styles.main}>
            <Icon name={'location'} size={25} color="black" />
            <Text style={styles.location}>{t(City)}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.horizontalLine, , {width: screenWidth * 0.85}]} />
    </View>
  );
};

export default UserCard;
