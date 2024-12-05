import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {getData} from '../../Authcontext/Async';
import NetInfo from '@react-native-community/netinfo';
import ApiButton from '../ApiButton';

const Button = ({onPress, disabled, title, IconeName}) => {
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setselectedLanguage] = useState(null);
  const [isInternetAvailable, setIsInternetAvailable] = useState(true);
  const {t, i18n} = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const handlePress = async () => {
    if (loading || disabled) return;
    setLoading(true);
    try {
      const isInternetAvailabl = await NetInfo.fetch().then(
        state => state.isConnected,
      );
      if (isInternetAvailabl) {
        await onPress();
      } else {
        setIsInternetAvailable(isInternetAvailabl);
      }
    } catch (error) {
      console.error('Error checking internet connection:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const Language = async () => {
      const selectedLanguage = await getData('selectedLanguage');
      setselectedLanguage(selectedLanguage);
    };
    Language();
  }, []);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled || loading}>
      {!isInternetAvailable ? (
        <ApiButton setshow={setIsInternetAvailable} />
      ) : null}
      <LinearGradient
        colors={['#FF6B5B', '#FC2F7A']}
        style={[styles.buttonContainer, {width: screenWidth * 0.9}]}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}>
        <View>
          {loading ? (
            <ActivityIndicator color="white" size="large" />
          ) : (
            <View style={styles.rowContainer}>
              <Text style={styles.buttonText}>{t(title)}</Text>
              <Icon name={IconeName} size={25} color="white" />
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
