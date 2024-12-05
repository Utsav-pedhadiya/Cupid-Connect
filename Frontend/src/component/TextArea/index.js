import React, { useState } from 'react';
import { View, TextInput, Dimensions, Keyboard, I18nManager } from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const TextArea = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
  autoFocus,
  placeholderTextColor,
  placeholderFontSize,
  textAreaYourselfStyle,
  textAreaQualitiesStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const { t, i18n } = useTranslation();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const textAreaYourself = textAreaYourselfStyle ? styles.textAreaYourselfStyle : null;
  const textAreaQualities = textAreaQualitiesStyle ? styles.textAreaQualitiesStyle : null;

  const textAlignment = I18nManager.isRTL || i18next.language === 'ar' ? 'right' : 'left';

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter' || nativeEvent.key === 'next') {
      Keyboard.dismiss();
      nativeEvent.preventDefault();
    }
  };

  return (
    <View style={[styles.container]}>
      <TextInput
        style={[
          [
            styles.textArea,
            {
              flexDirection: I18nManager.isRTL || i18next.language === 'ar' ? 'row-reverse' : 'row',
              width: screenWidth * 0.9,
              textAlign: textAlignment,
            },
          ],
          textAreaYourself,
          textAreaQualities,
          isFocused
            ? { borderColor: constant.colors.greyBorder, borderWidth: 1 }
            : { borderColor: constant.colors.inputcolor, borderWidth: 1 },
        ]}
        value={value}
        scrollEnabled={true}
        onChangeText={onChangeText}
        placeholder={t(placeholder)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor || 'gray'}
        fontSize={placeholderFontSize || 16}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={true}
        numberOfLines={10}
        returnKeyType="next"
        onKeyPress={handleKeyPress}
        blurOnSubmit={true}
        placeholderStyle={{ textAlign: I18nManager.isRTL || i18next.language === 'ar' ? 'right' : 'left', color: 'red' }}
      />
    </View>
  );
};

export default TextArea;
