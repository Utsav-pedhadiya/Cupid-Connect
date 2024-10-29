import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Checkbox = ({label, onChange}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.checkboxContainer}>
      <View
        style={[
          styles.checkbox,
          isChecked && styles.checked,
          isChecked && {backgroundColor: 'green'}, // Change background color when checked
        ]}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
