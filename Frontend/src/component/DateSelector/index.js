import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import styles from './style';

const DateSelector = ({setSelecteddob}) => {
  const {t, i18n} = useTranslation();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const currentDate = new Date();

  const calculateAge = dob => {
    const diffInMs = Date.now() - dob.getTime();
    const ageDate = new Date(diffInMs);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    storeData('age', calculatedAge);
    setAge(calculatedAge);
  };

  useEffect(() => {
    setSelecteddob(selectedDate);
  }, [selectedDate]);

  const onChange = selectedDate => {
    const selectedYear = selectedDate.getFullYear();

    setDate(selectedDate);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setSelectedDate(selectedYear); 
    storeData('dob', selectedYear);

  };

  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };

  const handleConfirm = () => {
    setShowDatePicker(false);

    calculateAge(date);
  };

  const formattedDate = selectedDate || t('Select Date'); 

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={showDateTimePicker}>
        <View style={[styles.container, {width: screenWidth * 0.9}]}>
          <Text style={styles.text}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={date}
              maximumDate={currentDate}
              mode="date"
              onDateChange={onChange}
              textColor="black"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>{t('Confirm')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                <Text style={styles.cancelButtonText}>{t('Cancel')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateSelector;
