import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import styles from './style';
import HeadingText from '../HeadingText';
import InputText from '../InputText';
import DateTimePicker from '@react-native-community/datetimepicker';

const SquareButton = ({titleOne, titleTwo}) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [nameMale, setNameMale] = useState('');
  const [dobMale, setDobMale] = useState(new Date());
  const [nameFemale, setNameFemale] = useState('');
  const [dobFemale, setDobFemale] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const PressOne = () => {
    setSelectedButton(1);
  };

  const PressTwo = () => {
    setSelectedButton(2);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate =
      selectedDate || (selectedButton === 1 ? dobMale : dobFemale);
    setDatePickerVisible(Platform.OS === 'ios');
    selectedButton === 1 ? setDobMale(currentDate) : setDobFemale(currentDate);
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={PressOne}
          style={[
            styles.squareButtonone,
            selectedButton === 2 && styles.upatedsquareButtonone,
          ]}>
          <Text
            style={[
              styles.buttonTextOne,
              selectedButton === 2 && styles.upatedTextonone,
            ]}>
            {t(titleOne)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={PressTwo}
          style={[
            styles.squareButtontwo,
            selectedButton === 2 && styles.updatedsquareButtontwo,
            selectedButton === 1 && styles.upatedsquareButtonone,
          ]}>
          <Text
            style={[
              styles.buttonTextTwo,
              selectedButton === 2 && styles.upatedTextonTwo,
              selectedButton === 1 && styles.upatedTextonone,
            ]}>
            {t(titleTwo)}
          </Text>
        </TouchableOpacity>
      </View>

      <HeadingText title={selectedButton === 1 ? 'Name' : 'Full Name'} />
      <View style={styles.inputstyle}>
        <InputText
          value={selectedButton === 1 ? nameMale : nameFemale}
          onChangeText={selectedButton === 1 ? setNameMale : setNameFemale}
          placeholder={`Enter your ${
            selectedButton === 1 ? 'name' : 'full name'
          }`}
          keyboardType="default"
          maxLength={20}
          handleFocus={true}
          useStyle1={false}
          isFocused={true}
        />
      </View>
      <HeadingText title="Date of Birth" />
      <View style={styles.inputstyle}>
        <TouchableOpacity onPress={toggleDatePicker}>
          <InputText
            editable={false}
            placeholder={t("Select Date")}
            value={
              selectedButton === 1
                ? dobMale.toDateString()
                : dobFemale.toDateString()
            }
          />
        </TouchableOpacity>

        {isDatePickerVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedButton === 1 ? dobMale : dobFemale}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
    </>
  );
};

export default SquareButton;
