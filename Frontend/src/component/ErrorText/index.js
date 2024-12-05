import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const ErrorText = ({title, IconName}) => {
  const {t} = useTranslation();
  const isRTL = i18next.language === 'ar';
  return (
    <View
      style={[
        styles.container,
        {flexDirection: isRTL ? 'row-reverse' : 'row', marginHorizontal: 16},
      ]}>
      <Icon name={IconName} size={25} color="red" style={styles.image} />
      <Text style={styles.text}>{t(title)}</Text>
    </View>
  );
};

export default ErrorText;
