import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import HeadingText from '../../component/HeadingText';
import InputText from '../../component/InputText';
import {storeData} from '../../Authcontext/Async';
import AgeSelector from '../../component/AgeSelector';
import {useTranslation} from 'react-i18next';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {ScrollView as NativeScrollView} from 'react-native-gesture-handler';
import i18next from 'i18next';

const Gender = () => {
  const [selectedButtonGender, setSelectedButtonGender] = useState(1);
  const {t} = useTranslation();
  const [selectedAge, setSelectedAge] = useState(null);
  const [nameGender, setNameGender] = useState('');
  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const {navigate} = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const PressOne = () => {
    setSelectedButtonGender(1);
    storeData('gender', 'Male');
  };

  const PressTwo = () => {
    setSelectedButtonGender(2);
    storeData('gender', 'Female');
  };

  useEffect(() => {
    PressOne();
  }, []);

  const updateName = text => {
    setNameGender(text);
    storeData('username', text);
    setGenderError('');
    if (text.length >= 50) {
      setGenderError('Please limit to 50 character or less');
    }
  };

  const handleNext = () => {
    if (!nameGender.trim()) {
      setGenderError('Please enter your name');
    } else {
      setGenderError(false);
    }

    if (!selectedAge) {
      setAgeError(true);
      return;
    } else {
      setAgeError(false);
    }

    if (!nameGender.trim() || !selectedAge) {
      return;
    }
    navigate(routeNames.NATIONALITY, {gender: selectedButtonGender === 1 ? 'Male' : 'Female'});
  };
  const isRTL = i18next.language === 'ar';
  return (
    <KeyboardAvoidingView
      style={{height: '100%'}}
      behavior={Platform.OS === 'ios' ? 'height' : 'null'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
      <View style={styles.Maincontainer}>
        <NativeScrollView
          contentContainerStyle={{minHeight: '65%', paddingBottom: 100}}>
          <HeadingText title="Gender" />
          <View
            style={[
              styles.container,
              {
                marginHorizontal: screenWidth * 0.05,
                justifyContent: isRTL ? 'flex-end' : 'flex-start',
              },
            ]}>
            <TouchableOpacity
              onPress={PressOne}
              style={[
                styles.squareButtonone,
                selectedButtonGender === 2 && styles.upatedsquareButtonone,
              ]}>
              <Text
                style={[
                  styles.buttonTextOne,
                  selectedButtonGender === 2 && styles.upatedTextonone,
                ]}>
                {t('Male')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={PressTwo}
              style={[
                styles.squareButtontwo,
                selectedButtonGender === 2 && styles.updatedsquareButtontwo,
                selectedButtonGender === 1 && styles.upatedsquareButtonone,
              ]}>
              <Text
                style={[
                  styles.buttonTextTwo,
                  selectedButtonGender === 2 && styles.upatedTextonTwo,
                  selectedButtonGender === 1 && styles.upatedTextonone,
                ]}>
                {t('Female')}
              </Text>
            </TouchableOpacity>
          </View>
          <HeadingText title={'Name'} />
          <View style={styles.inputstyle}>
            <InputText
              value={nameGender}
              onChangeText={updateName}
              placeholder={`Enter your name`}
              keyboardType="default"
              handleFocus={true}
              useStyle1={false}
              isFocused={true}
              maxLength={50}
            />
            <Text
              style={[
                styles.errorText,
                {marginHorizontal: screenWidth * 0.05},
                {
                  opacity: genderError ? 1 : 0,
                  textAlign: isRTL ? 'right' : 'left',
                },
              ]}>
              {t(genderError)}
            </Text>
          </View>
          <View style={styles.inputstyle1}>
            <HeadingText title={'Age'} />
            <AgeSelector
              setSelectedAge={setSelectedAge}
              handleAgeError={setAgeError}
            />
            <Text
              style={[
                styles.errorText,
                {marginHorizontal: screenWidth * 0.05},
                {
                  opacity: ageError ? 1 : 0,
                  textAlign: isRTL ? 'right' : 'left',
                },
              ]}>
              {t('Please select your age')}
            </Text>
          </View>
        </NativeScrollView>

        <Button title="Next" IconeName={'arrowright'} onPress={handleNext} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Gender;
