import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const FormattedTextInput = ({ value, onChangeText, ...rest }) => {
  const [formattedValue, setFormattedValue] = useState('');

  const handleInputChange = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');

    let formattedText = '';
    for (let i = 0; i < cleanedText.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedText += '-';
      }
      formattedText += cleanedText[i];
    }

    setFormattedValue(formattedText);
    onChangeText(formattedText); // Pass formatted text to parent component
  };

  return (
    <View>
      <TextInput
        {...rest}
        value={formattedValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default FormattedTextInput;
