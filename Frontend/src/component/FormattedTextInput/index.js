import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import NumberTextInput from '../NumberTextInput';

const FormattedTextInput = ({
  value,
  onChangeText,
  formatStyle,
  showIcon,
  handleInputChange,
  removeCountryCode,
  formatMMYY,
  halfWidth,
  ...rest
}) => {
  const [formattedValue, setFormattedValue] = useState('');

  const screenWidth = Dimensions.get('window').width;

  const formatText = text => {
    let cleanedText = text.replace(/[^0-9]/g, '');

    let formattedText = '';
    for (let i = 0; i < cleanedText.length; i++) {
      if (formatStyle === 'dash' && i > 0 && i % 4 === 0) {
        formattedText += ' ';
      } else if (formatStyle === 'date' && i > 0 && i % 2 === 0) {
        formattedText += '/';
      } else if (formatStyle === 'mobile' && i > 0 && i % 3 === 0) {
        formattedText += ' ';
      }
      formattedText += cleanedText[i];
    }

    setFormattedValue(formattedText);
    onChangeText(cleanedText);
  };

  const handleInput = text => {
    let formattedText = text;
    if (formatMMYY) {
      formattedText = text.replace(/\D/g, '').substring(0, 4);
      if (formattedText.length > 2) {
        formattedText = formattedText.replace(/(\d{2})(\d{2})/, '$1/$2');
      }
    }
    handleInputChange
      ? handleInputChange(formattedText)
      : formatText(formattedText);
  };

  return (
    <View style={[styles.container, {width: screenWidth * 0.9}]}>
      <NumberTextInput
        {...rest}
        value={formattedValue}
        onChangeText={handleInput}
        keyboardType="numeric"
        countryCode={removeCountryCode ? false : true}
        LeftIcon={showIcon ? 'phone' : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default FormattedTextInput;
