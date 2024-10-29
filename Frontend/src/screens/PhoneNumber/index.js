import React, {useState} from 'react';
import {View, Text} from 'react-native';
import InputText from '../../component/InputText';
import Header from '../../component/Header';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import constant from '../../constants/constant';
import styles from './style';
import {useAuth} from '../../Authcontext/AuthContext';
import {GENERATE_OTP_API} from '../../constants/Api';
import axios from 'axios';
import FormattedTextInput from '../../component/FormattedTextInput'; // Import the FormattedTextInput component

const PhoneNumber = ({navigation}) => {
  const {navigate} = useNavigation();
  const {Monumber} = useAuth();
  const [number, setNumber] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isMobileNumberValid = number.replace(/-/g, '').length >= 9;

  const handleIconPress = () => {
    navigation.goBack();
  };
  const handleNextButtonPress = async () => {
    if (isMobileNumberValid) {
      const formattedNumber = number.replace(/-/g, '');
      Monumber(formattedNumber);

      //Api call
      console.log(formattedNumber);
      try {
        const response = await axios.post(GENERATE_OTP_API, {
          number: formattedNumber,
        });
        navigate(routeNames.OTP, {
          phoneNumber: formattedNumber,
          response: response.data,
        });
      } catch (error) {
        console.error('Error calling API:', error);
      }
    } else {
      setIsInputTouched(true);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Header onIconPress={handleIconPress} />
        <HeadingText title="Enter your phone number" />
        <SecondaryText secondTitle="We will send an OTP to verify your phone number" />
        <View style={styles.inputcontainer}>
          <FormattedTextInput
            value={number}
            onChangeText={setNumber} // Directly set the number
            keyboardType="numeric"
            maxLength={11}
            autoFocus
            placeholder="000-000-000"
            placeholderTextColor={constant.colors.placeholder}
            placeholderFontSize={constant.FontSize.secondaryText}
          />
          {isInputTouched && !isMobileNumberValid && (
            <Text style={styles.errorText}>
              Please enter a valid phone number
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
    </>
  );
};

export default PhoneNumber;
