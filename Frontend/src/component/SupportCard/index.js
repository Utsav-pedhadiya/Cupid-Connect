import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const SupportCard = ({Name, Information, source, IconName, onPress}) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {width: screenWidth * 0.9}]}>
        <View
          style={[
            styles.maincontainer,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <Icon
            name={IconName}
            size={25}
            color="#FC3876"
            style={styles.image}
          />
          <View
            style={[
              styles.datacontainer,
              {alignItems: isRTL ? 'flex-end' : 'flex-start'},
            ]}>
            <Text style={styles.name}>{t(Name)}</Text>
            <Text style={styles.Information}>{t(Information)}</Text>
          </View>
          <Icon
            name="chevron-right"
            size={25}
            color="black"
            style={styles.image2}
          />
        </View>
        <View style={styles.user}>
          <View style={[styles.horizontalLine, {width: screenWidth * 0.9}]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SupportCard;
