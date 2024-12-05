import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
  I18nManager,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import Header from '../../component/Header';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import ErrorText from '../../component/ErrorText';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {GENERATE_OTP_API, LOGIN_API} from '../../constants/Api';
import {useAuth} from '../../Authcontext/AuthContext';
import {getData, storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const Otp = ({navigation}) => {
  const {t} = useTranslation();
  const {login} = useAuth();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef(
    Array(6)
      .fill(0)
      .map(() => useRef()),
  );
  const [resendTimer, setResendTimer] = useState(60);
  const [error, setError] = useState(false);
  const [newResendOtp, setnewResendOtp] = useState(false);
  const {navigate} = useNavigation();
  const route = useRoute();
  const {phoneNumber, response} = route.params || {};
  const screenWidth = Dimensions.get('window').width;

  const isRTL = i18next.language === 'ar';
  useEffect(() => {
    const send_otp = response?.otp;
    if (send_otp) {
      const otpArray = send_otp.toString().split('');
      setOtp(otpArray);
    }

    const timerInterval = setInterval(() => {
      setResendTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (!value && index > 0) {
      otpInputRefs.current[index - 1].current.focus();
    } else if (value && index < 5) {
      otpInputRefs.current[index + 1].current.focus();
    }
  };

  const handleIconPress = () => {
    navigation.goBack();
  };

  const handleNextPress = async () => {
    const enteredOtp = otp.join('');
    const DeviceToken = await getData('device_token');

    if (enteredOtp == response.otp || enteredOtp == newResendOtp) {
      try {
        const response = await axios.post(LOGIN_API, {
          number: phoneNumber,
          otp: enteredOtp,
          device_token: DeviceToken,
        });
        const Token = response.data.token;
        // const LoginToken = response.data.token;
        storeData('Token', Token);
        login(Token);
      } catch (error) {
        navigate(routeNames.INTROSLIDER);
      }
    } else {
      setError(true);
    }
  };

  const handleResendOtp = async () => {
    const storedNumber = await getData('number');

    try {
      setError(false);
      const response = await axios.post(GENERATE_OTP_API, {
        number: storedNumber,
      });

      const newOtp = response.data.otp.toString();
      const newOtpArray = response.data.otp.toString().split('').slice(0, 6);

      setOtp(newOtpArray);
      setnewResendOtp(newOtp);
      setResendTimer(60);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header onIconPress={handleIconPress} />
      <HeadingText title="Confirm your number" />
      <SecondaryText
        secondTitle={`Enter the verification code sent to`}
        titleDynamicText={phoneNumber}
      />
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleOtpChange(index, value)}
            ref={otpInputRefs.current[index]}
            returnKeyType={index === 5 ? 'done' : 'next'}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              if (index < 5) {
                otpInputRefs.current[index + 1].current.focus();
              }
            }}
          />
        ))}
      </View>

      {error && (
        <ErrorText title="Error verifying code" IconName={'alert-circle'} />
      )}

      <View
        style={[
          styles.resendcontainer,
          {
            flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            justifyContent: isRTL ? 'flex-end' : 'flex-start',
          },
        ]}>
        <TouchableOpacity onPress={handleResendOtp} disabled={resendTimer > 0}>
          <Text
            style={[
              styles.resendText,
              resendTimer <= 0 && styles.underlinedResendText,
              {marginLeft: screenWidth * 0.05},
            ]}>
            {resendTimer > 0
              ? `${t('Resend code in')} 00:${resendTimer} `
              : t('Resend code')}
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="Next" IconeName={'arrowright'} onPress={handleNextPress} />
    </View>
  );
};

export default Otp;
