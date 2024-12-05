import React from 'react';
import {View, Text, Dimensions} from 'react-native'; // Import Dimensions
import styles from './style';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const HeadingText = ({title}) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';


  return (
    <View
      style={{
        flexDirection: isRTL ? 'row' : 'row-reverse',
        justifyContent: 'flex-end',
  
      }}>
      <Text
        style={[
          styles.text,
          {
            marginHorizontal: screenWidth * 0.05,
          },
        ]}>
        {t(title)}
      </Text>
    </View>
  );
};

export default HeadingText;
