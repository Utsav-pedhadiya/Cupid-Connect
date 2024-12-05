// RadioButtonCompo.js
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import constant from '../../constants/constant';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';
import {translateOptions} from '../../services/utils';
import {useTranslation} from 'react-i18next';

const RadioButtonCompo = ({options, onSelect, initialValue}) => {
  const {t} = useTranslation();
  const [checked, setChecked] = useState(initialValue);

  const handleOptionPress = value => {
    const selectedOption = options.find(option => option.value === value);

    if (selectedOption) {
      onSelect(selectedOption);
      setChecked(value);
    }
  };

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  const translatedOptions = translateOptions(options);

  const isRTL = i18next.language === 'ar';

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {translatedOptions.map(option => (
        <TouchableOpacity
          style={[
            styles.optionContainer,
            {
              justifyContent: isRTL ? 'flex-start' : 'flex-end',
            },
          ]}
          onPress={() => handleOptionPress(option.value)}
          key={option.value}>
          <CheckBox
            containerStyle={[
              styles.checkBoxContainer,
              {
                flexDirection: isRTL ? 'row-reverse' : 'row',
              },
            ]}
            wrapperStyle={{
              flexDirection: 'row-reverse',
            }}
            title={option.label}
            checked={checked == option.value}
            onPress={() => handleOptionPress(option.value)}
            checkedIcon={
              <Icon
                name="radio-button-on"
                size={24}
                color={constant.colors.pinkBorder}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-off"
                size={24}
                color={constant.colors.black}
              />
            }
            iconType="font-awesome"
            uncheckedColor={constant.colors.black}
            checkedColor={constant.colors.pinkBorder}
            textStyle={[styles.label, {textAlign: isRTL ? 'right' : 'left'}]}
            iconRight={!isRTL}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RadioButtonCompo;
