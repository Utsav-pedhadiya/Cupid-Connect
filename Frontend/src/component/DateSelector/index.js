import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
import { getData, storeData } from '../../Authcontext/Async';

const DateSelector = ({setSelecteddob}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(0);

  const currentDate = new Date();

  const calculateAge = dob => {
    const diffInMs = Date.now() - dob.getTime();
    const ageDate = new Date(diffInMs);
    console.log("sdfcsdc",Math.abs(ageDate.getUTCFullYear() - 1970));
    storeData('age', Math.abs(ageDate.getUTCFullYear() - 1970));
    // return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const onChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');

    setDate(selectedDate || date);
    setSelectedDate(
      selectedDate ? selectedDate.toISOString().split('T')[0] : '',
    );
    setSelecteddob(
      selectedDate ? selectedDate.toISOString().split('T')[0] : '',
    );

   // Calculate age
    const dob = selectedDate || date;
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge);
  };

  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };
  return (
    <View>
      <TouchableOpacity onPress={showDateTimePicker}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {selectedDate ? selectedDate : 'Select Date'}
          </Text>
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          maximumDate={currentDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateSelector;
