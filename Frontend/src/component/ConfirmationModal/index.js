import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';

const ConfirmationModal = ({ isVisible, onConfirm, onCancel, title, mark }) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={[styles.centeredMain,{width: screenWidth * 0.6}]}>
        <Text style={styles.modalTitle}>{t(title)}{t(mark)}</Text>
        <View style={styles.popup}>
          <TouchableOpacity
            style={[styles.button,{width: screenWidth * 0.2}, styles.yesButton]}
            onPress={onConfirm}>
            <Text style={styles.buttonText}>{t("Yes")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {width: screenWidth * 0.2},styles.cancelButton]}
            onPress={onCancel}>
            <Text style={styles.buttonText}>{t("Cancel")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationModal;
