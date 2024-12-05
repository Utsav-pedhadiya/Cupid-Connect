import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const ProfileCard = ({text, onPress, IconName}) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.card, {flexDirection: isRTL ? 'row-reverse' : 'row'}]}>
          <View
            style={[
              styles.leftContainer,
              {flexDirection: isRTL ? 'row-reverse' : 'row'},
            ]}>
            <Icon1
              name={IconName}
              size={30}
              color="black"
              style={styles.leftIcon}
            />
            <Text style={styles.cardText}>{t(text)}</Text>
          </View>
          <Icon
            name="chevron-right"
            size={25}
            color="black"
            style={styles.rightIcon}
          />
        </View>
        <View>
          <View style={[styles.horizontalLine, {width: screenWidth * 0.9}]} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProfileCard;
