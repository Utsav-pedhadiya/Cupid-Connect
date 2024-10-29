import React, {useState} from 'react';
import { Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import constant from '../../constants/constant';
import styles from './style';

// ...
const DropDown = ({data, placeholder}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: constant.colors.greyBorder},
        ]}
        data={data}
        search
        placeholder={placeholder}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropDown;

