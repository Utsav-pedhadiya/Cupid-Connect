import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import constant from '../../constants/constant';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure the correct import path is used
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const RequestContactCard = ({
  name,
  time,
  mobileNumber,
  description,
  onPress,
}) => {
  const {t, i18n} = useTranslation();

  const isRTL = i18next.language === 'ar';
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.card, {flexDirection: isRTL ? 'row-reverse' : 'row'}]}>
          <Icon
            name={'user-circle-o'}
            size={40}
            color="black"
            style={styles.icon}
          />
          <View style={styles.mainColumn}>
            <View
              style={[
                styles.row,
                styles.headerRow,
                {flexDirection: isRTL ? 'row-reverse' : 'row'},
              ]}>
              <Text style={styles.content}>{t(name)}</Text>
              <Text style={styles.time}>{t(time)}</Text>
            </View>
            <View style={[styles.rowthree,{flexDirection: isRTL ? 'row-reverse' : 'row'},]}>
              <Text style={styles.description}>{t(description)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default RequestContactCard;
