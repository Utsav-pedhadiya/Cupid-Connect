import React, {useEffect, useState} from 'react';
import {Dimensions, KeyboardAvoidingView, Text, View,Platform} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import constant from '../../constants/constant';
import InputText from '../../component/InputText';
import {storeData} from '../../Authcontext/Async';
import {Maritial_Status, options1} from './data';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

const MaritialStatus = ({navigation}) => {
  const {t} = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [numberOfChildren, setNumberOfChildren] = useState('');
  const [sonError, seSonError] = useState(false);
  const {navigate} = useNavigation();
  const {height: windowHeight} = Dimensions.get('window');
  const keyboardVerticalOffset = windowHeight * 0.3;

  useEffect(() => {
    const defaultMaritial_Status = Maritial_Statu[0];
    storeData('maritalStatus', defaultMaritial_Status.value);
  }, []);

  const handleSelect = value => {
    const defaultMaritial_Status = value.value;
    storeData('maritalStatus', defaultMaritial_Status);
    setSelectedOption(value);
  };

  const NumberOfChildren = text => {
    const ChildernValue = text.replace(/[^0-9.]/g, '');
    setNumberOfChildren(ChildernValue);
    storeData('numberOfChildren', ChildernValue);
    seSonError(false);
  };

  const handleNext = () => {
    if (selectedOption && selectedOption.value === 'married') {
      if (!numberOfChildren.trim()) {
        seSonError(true);
        return;
      } else {
        seSonError(false);
      }
    }

    navigate(routeNames.RELIGIOUSCOMMITMENT);
  };
  const Maritial_Statu = Maritial_Status.map(item => {
    return {label: t(item.label), value: item.value};
  });

  return (
    <KeyboardAvoidingView
        style={{height: '100%'}}
        behavior={Platform.OS === 'ios' ? 'height' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{minHeight: '35%'}}>
          <HeadingText title="Marital Status" />
          <RadioButtonCompo
            options={Maritial_Statu}
            initialValue={'Single'}
            onSelect={handleSelect}
          />

          {selectedOption && selectedOption.value === 'Married' && (
            <>
              <InputText
                value={numberOfChildren.toString()}
                onChangeText={NumberOfChildren}
                keyboardType="numeric"
                maxLength={2}
                autoFocus
                placeholder="Number of Children"
                placeholderTextColor={constant.colors.placeholder}
                placeholderFontSize={constant.FontSize.secondaryText}
                isFocused={true}
              />
              <Text style={[styles.errorText, {opacity: sonError ? 1 : 0}]}>
                {t('Please enter number of children')}
              </Text>
            </>
          )}
          {selectedOption && selectedOption.value === 'Widowed' && (
            <>
              <InputText
                value={numberOfChildren.toString()}
                onChangeText={NumberOfChildren}
                keyboardType="numeric"
                maxLength={2}
                autoFocus
                placeholder="Number of Children"
                placeholderTextColor={constant.colors.placeholder}
                placeholderFontSize={constant.FontSize.secondaryText}
                isFocused={true}
              />
              <Text style={[styles.errorText, {opacity: sonError ? 1 : 0}]}>
                {t('Please enter number of children')}
              </Text>
            </>
          )}
        </ScrollView>

        <Button title="Next" IconeName={'arrowright'} onPress={handleNext} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MaritialStatus;
