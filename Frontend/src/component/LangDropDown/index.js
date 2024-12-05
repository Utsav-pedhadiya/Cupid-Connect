import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './style';
import { storeData } from '../../Authcontext/Async';

const LangDropDown = () => {
  const {i18n} = useTranslation();

  const toggleLanguage = async () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    storeData('selectedLanguage', newLanguage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLanguage} style={styles.button}>
        <Text style={styles.buttonText}>
          {i18n.language === 'en' ? 'Arabic' : 'English'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LangDropDown;
