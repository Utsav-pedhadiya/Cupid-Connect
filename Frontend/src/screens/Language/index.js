import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  Dimensions,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {getData, storeData} from '../../Authcontext/Async';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../Authcontext/AuthContext';
import axios from 'axios';
import {LOGOUT_API} from '../../constants/Api';
import SupportHeader from '../../component/SupportHeader';
import {use} from 'i18next';

const Language = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const {i18n} = useTranslation();
  const {logout} = useAuth();
  const screenWidth = Dimensions.get('window').width;
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const defaultLanguage = Platform.OS === 'ios' ? 'en' : 'ar';

    getData('selectedLanguage').then(language => {
      const selectedLanguageToStore = language || defaultLanguage;
      setSelectedLanguage(
        selectedLanguageToStore === 'en' ? 'English' : 'Arabic',
      );
      i18n.changeLanguage(selectedLanguageToStore);
      I18nManager.allowRTL(selectedLanguageToStore === 'ar');
    });
  }, [forceUpdate]);

  const handleIconPress = () => {
    navigation.goBack();
  };

  const handleLanguageSelect = async language => {
    const selectedLanguageToStore = language === 'en' ? 'en' : 'ar';

    setSelectedLanguage(language);
    storeData('selectedLanguage', selectedLanguageToStore);

    i18n.changeLanguage(language);
    I18nManager.allowRTL(language === 'ar');
    setForceUpdate(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <SupportHeader
        heading="Language"
        LeftIcon={constant.imagePath.leftcirclearrow}
        bigheader={true}
        onPressLeftIcon={handleIconPress}
        showHeadingText={true}
      />

      <TouchableOpacity onPress={() => handleLanguageSelect('en')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.text,
              selectedLanguage === 'English' ? {color: '#FC3876'} : null,
            ]}>
            English
          </Text>
          {selectedLanguage === 'English' && (
            <Icon
              name="checkmark-sharp"
              size={25}
              color="#FC3876"
              style={{padding: 16}}
            />
          )}
        </View>
      </TouchableOpacity>

      <View style={[styles.horizontalLine, {width: screenWidth * 0.9}]} />

      <TouchableOpacity onPress={() => handleLanguageSelect('ar')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.text,
              selectedLanguage === 'Arabic' ? {color: '#FC3876'} : null,
            ]}>
            العربية
          </Text>
          {selectedLanguage === 'Arabic' && (
            <Icon
              name="checkmark-sharp"
              size={25}
              color="#FC3876"
              style={{padding: 16}}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Language;
