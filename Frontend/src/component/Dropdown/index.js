import React from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';

const Dropdown = ({title, selectedValue, placeholder, onSelect, options}) => {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSelect = value => {
    onSelect(value);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.inputContainer}>
          <Text style={styles.placeholderText}>
            {selectedValue ? selectedValue.label : placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>{t(title)}</Text>
          <ScrollView>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => handleSelect(option.value)}>
                <Text style={styles.optionText}>{t(option.label)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.closeButton}>{t("Close")}</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;
