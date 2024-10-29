// import liraries
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const textAreaYourself = textAreaYourselfStyle ? styles.textAreaYourselfStyle : null;
  const textAreaQualities = textAreaQualitiesStyle ? styles.textAreaQualitiesStyle : null;

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textArea,
          textAreaYourself,
          textAreaQualities,
          isFocused
            ? { borderColor: constant.colors.greyBorder, borderWidth: 1 }
            : { borderColor: constant.colors.inputcolor, borderWidth: 1 },

        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
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
      />
    </View>
  );
};

export default TextArea;
