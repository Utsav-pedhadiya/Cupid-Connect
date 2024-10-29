import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const LangDropDown = () => {
  const [selectedValue, setSelectedValue] = useState('English');
  const [isModalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();

  const data = [
    {label: 'Arebic', value: 'ar'},
    {label: 'English', value: 'en'},
  ];

  const handleItemSelected = value => {
    setSelectedValue(value.label);
    i18n.changeLanguage(value.value);
    setModalVisible(false);
  };

  const renderOptions = () => {
    return data
      .filter(language => language.label !== selectedValue)
      .map((language, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleItemSelected(language)}>
          <Text>{language.label}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.dropdownButton}>
        <View style={styles.laung}>
        <Text style={styles.text}>{selectedValue || 'English'}</Text>
        <Icon
            name={'chevron-down'}
            size={25}
            color="black"
            style={styles.Icon}
          />
        </View>
      </TouchableOpacity>

      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>{renderOptions()}</View>
        </View>
      </Modal>
    </View>
  );
};

export default LangDropDown;
