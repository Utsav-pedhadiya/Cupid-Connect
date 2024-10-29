import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import constant from '../../constants/constant';
import styles from './style';

const RadioButtonCompo = ({options, onSelect}) => {
  const [checked, setChecked] = useState(options[0].value);

  const handleOptionPress = value => {
    setChecked(value);
    const selectedOption = options.find(option => option.value === value);
    onSelect(selectedOption);
    // console.log(
    //   "hfhghghjgjg",selectedOption
    // );
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={value => handleOptionPress(value)}
        value={checked}>
        {options.map((option, index) => (
          <ScrollView key={index}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => handleOptionPress(option.value)}>
              <RadioButton
                value={option.value}
                uncheckedColor={constant.colors.black}
                color={constant.colors.pinkBorder}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color:
                      checked === option.value
                        ? constant.colors.pinkBorder
                        : constant.colors.black,
                  },
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default RadioButtonCompo;
