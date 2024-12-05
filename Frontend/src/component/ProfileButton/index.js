import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const ProfileButton = ({text, onPress}) => {
  const {t, i18n} = useTranslation();
  const isRTL = i18next.language === 'ar';
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.package]}>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <Text style={styles.name}>{t(text)}</Text>
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
