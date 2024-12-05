import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';

const PrimaryText = ({title}) => {
  const {t, i18n} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18n.language === 'ar';
  return (
    <View style={{flexDirection: isRTL ? 'row-reverse' : 'row'}}>
      <Text
        style={[
          styles.text,
          {
            marginHorizontal: screenWidth * 0.05,
            textAlign: I18nManager.isRTL ? 'right' : 'left', // Set text alignment based on language direction
          },
        ]}>
        {t(title)}
      </Text>
    </View>
  );
};

export default PrimaryText;
