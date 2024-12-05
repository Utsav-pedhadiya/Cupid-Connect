import React, {useState, forwardRef} from 'react';
import {TextInput, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {ActivityIndicator} from 'react-native-paper';

const SimpleTextInput = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const conditionalPlaceholderTextColor = props.placeholderTextColor
    ? props.placeholderTextColor
    : props.dropdown
    ? 'black'
    : 'gray';

  const inputStyle = props.BodyStructureStyle
    ? {width: screenWidth * 0.4, margin: screenWidth * 0.02}
    : null;
  const inputStyle2 = props.RangerStyle
    ? {width: screenWidth * 0.4, margin: screenWidth * 0.02}
    : null;

  return (
    <View style={[styles.mainContainer]}>
      <View
        style={[
          styles.input,
          {
            width: screenWidth * 0.9,
            flexDirection: isRTL ? 'row' : 'row-reverse',
            justifyContent: isRTL ? 'flex-end' : 'flex-start',
          },
          inputStyle,
          inputStyle2,
          isFocused
            ? {borderColor: constant.colors.greyBorder, borderWidth: 1}
            : {borderColor: constant.colors.inputcolor, borderWidth: 1},
        ]}>
        {props.loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <ActivityIndicator color="#FC3876" size="small" />
          </View>
        ) : (
          <>
            <View
              style={{
                marginHorizontal: 25,
                alignSelf: 'center',
                top: 12,
              }}>
              {props.rightIcon && (
                <Icon
                  name={'chevron-down'}
                  size={20}
                  color="black"
                  style={styles.rightIcon}
                />
              )}
            </View>
            <TextInput
              ref={ref}
              style={[{flex: 1, color: 'black'}, isRTL && {textAlign: 'right'}]}
              value={t(props.value)}
              onChangeText={props.onChangeText}
              placeholder={t(props.placeholder)}
              secureTextEntry={props.secureTextEntry}
              keyboardType={props.keyboardType}
              maxLength={props.maxLength}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor={conditionalPlaceholderTextColor}
              fontSize={props.placeholderFontSize || 16}
              editable={props.editable}
              returnKeyType={'next'}
            />

            <View
              style={{
                flexDirection: isRTL ? 'row' : 'row-reverse',
                alignItems: 'center',
              }}>
              {isRTL
                ? props.countryCode && (
                    <Text style={styles.countryCode}>179+</Text>
                  )
                : props.countryCode && (
                    <Text style={styles.countryCode}>+1</Text>
                  )}
              {props.LeftIcon && (
                <Icon
                  name={props.LeftIcon}
                  size={22}
                  color="black"
                  style={styles.Icon}
                />
              )}
            </View>
          </>
        )}
      </View>
    </View>
  );
});

export default SimpleTextInput;
