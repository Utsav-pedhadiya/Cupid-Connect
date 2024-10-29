import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import styles from './style';

const SimpleTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
  placeholderTextColor,
  placeholderFontSize,
  editable,
  BodyStructureStyle,
  LeftIcon,
  countryCode,
  Icons,
  rightIcon,
  RangerStyle,
  dropdown
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const conditionalPlaceholderTextColor = placeholderTextColor
    ? placeholderTextColor
    : dropdown
    ? 'black'
    : 'gray'; 

  const inputStyle = BodyStructureStyle ? styles.BodyStructureStyle : null;
  const inputStyle2 = RangerStyle ? styles.RangerStyle : null;
  return (
    <View
      style={[
        styles.input,
        inputStyle,
        inputStyle2,
        isFocused
          ? {borderColor: constant.colors.greyBorder, borderWidth: 1}
          : {borderColor: constant.colors.inputcolor, borderWidth: 1},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {LeftIcon && (
          <Icon name={LeftIcon} size={22} color="black" style={styles.Icon} />
        )}
        {countryCode && <Text style={styles.countryCode}>+971</Text>}
      </View>

      <TextInput
        style={{flex: 1}}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={conditionalPlaceholderTextColor}
        fontSize={placeholderFontSize || 16}
        editable={editable}
      />
      {rightIcon && (
        <View style={styles.rightIcon}>
          <Icon
            name={'chevron-down'}
            size={20}
            color="black"
            style={styles.rightIcon}
          />
        </View>
      )}
    </View>
  );
};

export default SimpleTextInput;
