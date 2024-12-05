import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './style';
import Button from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
import routeNames from '../../constants/routeNames';
import {useTranslation} from 'react-i18next';
import LangDropDown from '../../component/LangDropDown';
import constant from '../../constants/constant';
import i18next from 'i18next';
import Searchbar from '../../component/Searchbar';

const AgreeTermsCondition = () => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const [isChecked, setChecked] = useState(false);
  const [isError, setIsError] = useState(true);
  const isRTL = i18next.language === 'ar';

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setIsError(true);
  };

  const handleNextButton = () => {
    if (isChecked) {
      navigate(routeNames.PHONENUMBER);
    } else {
      setIsError(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <LangDropDown /> */}
      <View style={styles.imgcontainer}>
        <Image source={constant.imagePath.logoimage} style={styles.img} />
        <Text style={styles.logotext}>{t('Welcome')}</Text>
      </View>

      <View
        style={[
          styles.checkboxContainer,
          {flexDirection: isRTL ? 'row-reverse' : 'row'},
        ]}>
        <CheckBox
          isChecked={isChecked}
          checkBoxColor="#FF6B5B"
          onClick={handleCheckboxChange}
        />

        <Text style={styles.checkboxText}>{t('Agree Terms & Conditions')}</Text>
      </View>

      <Text
        style={[
          styles.errorText,
          {opacity: isError ? 0 : 1, textAlign: isRTL ? 'right' : 'left'},
        ]}>
        {t('Please agree to the Terms & Conditions')}
      </Text>
      <Button
        title={t('Next')}
        IconeName={'arrowright'}
        onPress={handleNextButton}
        imageSource={constant.imagePath.nextarrow}
      />
    </View>
  );
};

export default AgreeTermsCondition;
