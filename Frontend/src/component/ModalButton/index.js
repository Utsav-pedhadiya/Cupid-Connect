import React, { useState } from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import ApiButton from '../ApiButton';

const ModalButton = ({onPress, disabled, title, button2, IconName}) => {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isInternetAvailable, setIsInternetAvailable] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const newButton2 = button2 ? styles.button2 : null;

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
  return (
    <>
      <TouchableOpacity
        onPress={disabled ? null : handlePress}
        style={[styles.button, disabled && styles.disabledButton]}
        disabled={disabled}>
        {!isInternetAvailable ? (
          <ApiButton setshow={setIsInternetAvailable} />
        ) : null}
        <LinearGradient
          colors={['#FF6B5B', '#FC2F7A']}
          style={[
            styles.buttonContainer,
            newButton2,
            {width: screenWidth * 0.9},
          ]}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.rowContainer}>
            <Text style={styles.buttonText}>{t(title)}</Text>
            <Icon name={IconName} size={25} color="white" style={styles.Icon} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default ModalButton;
