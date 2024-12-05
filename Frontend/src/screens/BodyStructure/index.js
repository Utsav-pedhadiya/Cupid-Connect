import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platforms,
  Platform,
} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import InputText from '../../component/InputText';
import RadioButtonCompo from '../../component/Radiobutton';
import {storeData} from '../../Authcontext/Async';
import {BodyStructureOptions, healthStatusOptions} from './data';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const BodyStructure = () => {
  const {t} = useTranslation();
  const [height, setheight] = useState('');
  const [weight, setweight] = useState('');
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const {navigate} = useNavigation();
  const scrollViewRef = useRef(null);
  const heightInputRef = useRef(null);
  const weightInputRef = useRef(null);
  const isRTL = i18next.language === 'ar';

  useEffect(() => {
    const defaultbodyTone = useTranslatedOptions[0];
    storeData('bodyTone', defaultbodyTone.value);

    const defaultHealthStatus = healthStatus[0];
    storeData('healthStatus', defaultHealthStatus.value);
  }, []);

  const handleBodyTone = value => {
    const BodyTone = value.value;
    storeData('bodyTone', BodyTone);
  };

  const handleHealthStatus = value => {
    const HealthStatus = value.value;
    storeData('healthStatus', HealthStatus);
  };

  const updateHeight = text => {
    const heightValue = text.replace(/[^0-9.]/g, '');
    storeData('UserHeight', heightValue);
    setheight(heightValue);
    setHeightError(false);
  };

  const updateWeight = text => {
    const weightValue = text.replace(/[^0-9.]/g, '');
    storeData('UserWeight', weightValue);
    setweight(weightValue);
    setWeightError(false);
  };
  const handleNext = () => {
    let scrollY = 0;
    if (!height.trim()) {
      setHeightError(true);
      scrollY = heightInputRef.current ? heightInputRef.current.offsetTop : 0;
    } else {
      setHeightError(false);
    }
    if (!weight.trim()) {
      setWeightError(true);
      scrollY = weightInputRef.current ? weightInputRef.current.offsetTop : 0;
    } else {
      setWeightError(false);
    }
    if (!height.trim() || !weight.trim()) {
      scrollViewRef.current.scrollTo({y: scrollY, animated: true});

      return;
    }
    navigate(routeNames.ABOUTYOURSELF);
  };

  const useTranslatedOptions = BodyStructureOptions.map(item => {
    return {label: t(item.label), value: item.value};
  });
  const healthStatus = healthStatusOptions.map(item => {
    return {label: t(item.label), value: item.value};
  });

  return (
    <KeyboardAvoidingView
      style={{height: '100%'}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
      {/* <KeyboardAvoidingView
    style={{height: '100%'}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 120, android: 0 })}> */}
      <View style={styles.Maincontainer}>
        <View style={styles.container}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{paddingBottom: 100}}
            showsVerticalScrollIndicator={false}>
            <HeadingText title="Height & Weight" />
            <View style={styles.inputRow}>
              <View style={styles.inputBox}>
                <InputText
                  ref={heightInputRef}
                  value={height.toString()}
                  onChangeText={updateHeight}
                  placeholder="Height"
                  keyboardType="numeric"
                  maxLength={3}
                  BodyStructureStyle={true}
                />
                <Text
                  style={[
                    styles.errorText,
                    {marginHorizontal: screenWidth * 0.03},
                    {
                      opacity: heightError ? 1 : 0,
                      textAlign: isRTL ? 'right' : 'left',
                    },
                  ]}>
                  {t('Height is required.')}
                </Text>
              </View>
              <View style={styles.inputBox}>
                <InputText
                  ref={weightInputRef}
                  value={weight.toString()}
                  onChangeText={updateWeight}
                  placeholder="Weight"
                  keyboardType="numeric"
                  maxLength={3}
                  BodyStructureStyle={true}
                />
                <Text
                  style={[
                    styles.errorText,
                    {marginHorizontal: screenWidth * 0.03},
                    {
                      opacity: weightError ? 1 : 0,
                      textAlign: isRTL ? 'right' : 'left',
                    },
                  ]}>
                  {t('Weight is required')}
                </Text>
              </View>
            </View>
            <HeadingText title="Body Tone" />
            <RadioButtonCompo
              options={useTranslatedOptions}
              onSelect={handleBodyTone}
              initialValue={'Medium'}
            />

            <HeadingText title="Health status" />
            <RadioButtonCompo
              options={healthStatus}
              onSelect={handleHealthStatus}
              initialValue={'Healthy'}
            />
          </ScrollView>
        </View>
        <Button title="Next" IconeName={'arrowright'} onPress={handleNext} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default BodyStructure;
