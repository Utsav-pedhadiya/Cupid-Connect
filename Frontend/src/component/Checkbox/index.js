import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import constant from '../../constants/constant';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {storeData} from '../../Authcontext/Async';
import i18next from 'i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {translateOptions} from '../../services/utils';

const CheckboxCompo = ({options, onSelect, status}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const translatedOptions = translateOptions(options);
  const handleOptionPress = value => {
    setSelectedItem(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  useEffect(() => {
    storeData('interests', selectedItem);
  }, [selectedItem]);

  const isRTL = i18next.language === 'ar';

  return (
    <View style={[styles.container, {marginLeft: screenWidth * 0.04}]}>
      {translatedOptions.length > 0 &&
        translatedOptions.map((optionData, index) => (
          <TouchableOpacity
            style={[
              styles.optionContainer,
              {
                flexDirection: isRTL ? 'row-reverse' : 'row',
              },
            ]}
            onPress={() => handleOptionPress(optionData.value)}
            key={index}>
            <Icon
              name={
                status(optionData.value)
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={24}
              color={
                status(optionData.value)
                  ? constant.colors.pinkBorder
                  : constant.colors.black
              }
            />
            <Text
              style={[
                styles.label,
                {
                  color: status(optionData.value)
                    ? constant.colors.pinkBorder
                    : constant.colors.black,
                  textAlign: isRTL ? 'right' : 'left',
                },
              ]}>
              {t(optionData.label)}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default CheckboxCompo;
