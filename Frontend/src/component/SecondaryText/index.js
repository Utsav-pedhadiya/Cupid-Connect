import React from 'react';
import {View, Text, Image, Dimensions, I18nManager} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const SecondaryText = ({
  secondTitle,
  imageSource,
  introsecondarytitle,
  titleDynamicText = '',
}) => {
  const {t, i18n} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';
  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginHorizontal: screenWidth * 0.05,
            flexDirection: isRTL ? 'row' : 'row-reverse',
            justifyContent: 'flex-end'
          },
        ]}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text
          style={[
            styles.text,
            {
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            },
          ]}>
          {t(secondTitle)} {titleDynamicText} 
        </Text>
        {introsecondarytitle && (
          <Text style={styles.introsecondarytitle}>
            {t(introsecondarytitle)}
          </Text>
        )}
      </View>
    </>
  );
};

export default SecondaryText;
