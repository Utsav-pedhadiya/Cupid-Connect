import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../component/Header';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import constant from '../../constants/constant';
import styles from './style';
import {GENERATE_OTP_API} from '../../constants/Api';
import axios from 'axios';
import FormattedTextInput from '../../component/FormattedTextInput';
import {storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import ApiButton from '../../component/ApiButton';
import {PostApi} from '../../services/postServices';
import {useAuth} from '../../Authcontext/AuthContext';

const PhoneNumber = ({navigation}) => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const isRTL = i18next.language === 'ar';
  const [number, setNumber] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInternetAvailable, setIsInternetAvailable] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const isMobileNumberValid = number.replace(/-/g, '').length === 9;
  const {logout} = useAuth();

  const handleIconPress = () => {
    navigation.goBack();
  };

  const handleNextButtonPress = async () => {
    if (!isMobileNumberValid) {
      console.error('Invalid mobile number.');
      return;
    }

    const formattedNumber = number.replace(/-/g, '');
    console.log('Formatted number:', formattedNumber);
    storeData('number',formattedNumber)

    try {
      const response = await PostApi(GENERATE_OTP_API, {
        number: formattedNumber,
      });


      navigate(routeNames.OTP, {phoneNumber: formattedNumber, response});
    } catch (error) {
      console.error('Request failed:', error.response?.status, error.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{height: '100%'}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        behavior={Platform.OS === 'ios' ? 'height' : null}>
        {isInternetAvailable ? <ApiButton /> : null}
        <View style={styles.container}>
          <Header onIconPress={handleIconPress} />
          <HeadingText title="Enter your phone number" />
          <SecondaryText secondTitle="We will send an OTP to verify your phone number" />
          <View style={styles.inputcontainer}>
            <FormattedTextInput
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric"
              maxLength={11}
              formatStyle="mobile"
              autoFocus
              showIcon={true}
              placeholder="000 000 000"
              placeholderTextColor={constant.colors.placeholder}
              placeholderFontSize={constant.FontSize.secondaryText}
            />
            {isInputTouched && !isMobileNumberValid && (
              <Text
                style={[
                  styles.errorText,
                  {
                    marginLeft: screenWidth * 0.05,
                    textAlign: isRTL ? 'right' : 'left',
                  },
                ]}>
                {t('Please enter a valid phone number')}
              </Text>
            )}
          </View>
          <Button
            title="Next"
            IconeName={'arrowright'}
            onPress={handleNextButtonPress}
            disabled={!isMobileNumberValid}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default PhoneNumber;
