import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const HistoryCard = ({Name, Time, Iconename, content, onPress}) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, {width: screenWidth * 0.9}]}>
        <View
          style={[
            styles.column,
            styles.leftAlign,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <Icon
            name={Iconename}
            size={30}
            color="#4C4747"
            style={styles.image}
          />
          <View
            style={[
              styles.column2,
              {alignItems: isRTL ? 'flex-end' : 'flex-start'},
            ]}>
            <Text style={styles.name}>{t(Name)}</Text>
            <Text style={styles.content}>{t(content)}</Text>
          </View>
          <View style={[styles.column, styles.rightAlign]}>
            <Text style={styles.time}>{t(Time)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HistoryCard;
